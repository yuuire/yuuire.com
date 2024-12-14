import { render } from "preact";
import { meta } from "./components/constants";
import ProfileCard from "./components/profileCard";
import LastFm from "./components/lastfm";
import Card from "./components/card";

import "./style.css";

export function App() {
	return (
		<html
			lang="en"
		>
		<head>
			<title>{`${meta.author}'s website`}</title>

			<link rel="icon" type="image" href="/public/yuuire-lettermark.png" />

			<meta name="author" content={meta.author} />
			<meta name="title" content={meta.author} />
			<meta name="twitter:title" content={meta.author} />
			<meta property="og:title" content={meta.author} />
			<meta property="og:site_name" content={meta.author} />

			<meta name="description" content={meta.shortdesc} />
			<meta name="twitter:description" content={meta.shortdesc} />

			<meta name="twitter:url" content={`https://${meta.plainurl}`} />
			<meta property="og:url" content={`https://${meta.plainurl}`} />

			<meta charset="utf-8" />
			<meta name="keywords" content={meta.keywords.join(', ')} />
			<meta name="robots" content="index, follow" />
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="language" content="English" />
			<meta name="revisit-after" content="12 days" />
			<meta property="og:type" content="website" />

			<meta property="og:image" content={`https://github.com/${meta.author}`} />
			<meta name="twitter:image" content={`https://github.com/${meta.author}`} />

			<meta name="twitter:card" content="summary_large_image" />
		</head>
		<body>
			<div className="flex items-center justify-center h-screen text-neutral-200 transition-all">
			<div className="flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-4 mt-4">
				<div className="md:col-span-2">
					<ProfileCard />
				</div>
				<div className="md:col-span-2">
				<Card className="text-lg max-w-full py-3 w-full">
					<LastFm />
				</Card>
				</div>
			</div>
			</div>
		</body>
		</html>
	);
}

render(<App />, document.getElementById("app"));
