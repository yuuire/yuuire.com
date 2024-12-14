import Card from "./card";
import { FaGithub, FaLastfm, FaDiscord } from "react-icons/fa";
import { meta } from "./constants";

export default function ProfileCard() {
  return (
    <Card className="text-xl md:p-8">
      <div className="flex flex-col justify-center">
        <img
          src={`https://github.com/${meta.author}.png`}
          alt="profile image"
          width="100"
          height="100"
          style={{ borderRadius: "50%" }}
        />
        <div className="text-2xl mt-2 text-wisteria">
          Hey, I'm <span className="font-semibold">{meta.author}.</span>
        </div>
        <div className="text-base text-neutral-300">
          {meta.shortdesc}
          <br />{" "}
        </div>
        <div className="text-sm text-neutral-400">
          inquiries?
          <br />
          shoot me an email at <b>contact [@] yuuire [DOT] com</b>
        </div>
        <div className="text-3xl text-neutral-400 flex gap-2 mt-2">
          <a
            href={`https://github.com/${meta.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-wisteria transition-colors duration-200" />
          </a>
          <a
            href={`https://bsky.app/profile/${meta.plainurl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-auto w-7 pt-[0.187rem] hover:text-wisteria transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 568 501"
            >
              <title>Bluesky butterfly logo</title>
              <path
                fill="currentColor"
                d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z"
              ></path>
            </svg>
          </a>
          <a
            href={`${meta.discord}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="hover:text-wisteria transition-colors duration-200" />
          </a>
          <a
            href={`https://last.fm/user/${meta.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLastfm className="hover:text-wisteria transition-colors duration-200" />
          </a>
          <a
            href={`https://myanimelist.net/profile/${meta.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="simple-icons--myanimelist hover:text-wisteria transition-colors duration-200"></span>
          </a>
        </div>
      </div>
    </Card>
  );
}
