import { useEffect } from "preact/hooks";
import useSWR from "swr";
import { CrossFade } from "react-crossfade-simple";
import Ambilight from "./ambilight";
import { FaLastfm } from "react-icons/fa";
import { LuFileWarning } from "react-icons/lu";
import { meta } from "./constants";

const FM_KEY = meta.lastfm_api;
const MAIN = meta.author;

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let recentTrack = data?.recenttracks.track[0];
      console.log(recentTrack);
      return {
        name: recentTrack.name,
        artist: recentTrack.artist["#text"],
        imageUrl: recentTrack.image[recentTrack.image.length - 1]["#text"],
        isCurrent: recentTrack["@attr"]?.nowplaying === "true",
      };
    });

const LastFm = () => {
  const { data, error } = useSWR(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${MAIN}&api_key=${FM_KEY}&limit=1&format=json`,
    fetcher,
    {
      refreshInterval: 10000, // Refresh every 10 seconds
      revalidateOnFocus: false, // Disable revalidation on window focus
    }
  );

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <CrossFade contentKey={data?.name + data?.artist + data?.imageUrl}>
      {data ? (
        <div className="flex flex-row items-center justify-left w-full h-full max-w-full">
          <Ambilight />
          <div className="h-24">
            {data.imageUrl ===
            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png" ? (
              <div className="flex flex-col items-center justify-center text-center text-sm text-gray-400 mr-4 w-24 h-24 self-center contain-content rounded-lg margin-auto ambilight bg-gray-500/30 z-20 border border-gray-300/20 border-neutral-600/30">
                <LuFileWarning className="text-2xl mb-1" />
                <p>No cover found!</p>
              </div>
            ) : (
              <img
                src={data.imageUrl}
                alt="cover"
                className="mr-4 max-w-24 max-h-24 self-center contain-content rounded-lg margin-auto ambilight z-20 border border-gray-300/20"
              />
            )}
          </div>
          <div className="flex flex-col items-left justify-center w-min leading-normal max-w-[calc(95%-6rem)]">
            <div className="text-sm text-gray-400 text-left w-max">
              {data.isCurrent ? "Now Playing" : "Last Played"} on {" "}
              <a
                href={`https://www.last.fm/user/${MAIN}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLastfm className="inline text-base mb-0.5 hover:text-wisteria transition-colors duration-150" />
              </a>
            </div>
            <a
              href={`https://www.last.fm/music/${data.artist}/_/${data.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block truncate whitespace-nowrap hover:text-wisteria transition-colors duration-150"
            >
              {data.name.length > 28 ? `${data.name.slice(0, 28)}...` : data.name}
            </a>
            <a
              href={`https://www.last.fm/music/${data.artist}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wisteria whitespace-nowrap transition-colors duration-150"
            >
              {data.artist}
            </a>
          </div>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center w-min max-w-[calc(95%-8rem)]">
          <div className="text-sm text-gray-400 text-left">{error.message}</div>
        </div>
      ) : (
        <div className="h-24 flex flex-col items-center justify-center">
          <div className="text-sm text-gray-400">Loading...</div>
          <noscript>
            <div className="text-sm text-gray-400">
              You'll need to enable JavaScript to view this content.
            </div>
          </noscript>
        </div>
      )}
    </CrossFade>
  );
};

export default LastFm;
