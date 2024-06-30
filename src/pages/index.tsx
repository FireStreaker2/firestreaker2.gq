import { JSX } from "react";
import { Inter } from "next/font/google";
import { Card, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { FaDiscord, FaGithub, FaReddit, FaSpotify } from "react-icons/fa";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface Social {
	icon: JSX.Element;
	href: string;
}

export default function Home() {
	const socials: Social[] = [
		{
			icon: <FaGithub />,
			href: "https://github.com/FireStreaker2",
		},
		{
			icon: <FaSpotify />,
			href: "https://open.spotify.com/user/a2okhh9x1dg64e5l6kbejlclt?si=9672334a4b2d4e7f",
		},
		{
			icon: <FaDiscord />,
			href: "https://discord.com/users/696037677962887248",
		},
		{
			icon: <FaReddit />,
			href: "https://www.reddit.com/user/FireStreaker2",
		},
	];

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="FireStreaker2's Website" />
				<meta name="keywords" content="FireStreaker2" />
				<meta name="copyright" content="FireStreaker2" />
				<meta property="og:title" content="FireStreaker2's Website" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="FireStreaker2's Website" />
				<meta name="theme-color" content="#000000" />
				<meta name="twitter:card" content="summary_large_image" />

				<title>FireStreaker2&apos;s Website</title>
				<link rel="icon" type="image/x-icon" href="/pfp.png" />
			</Head>
			<main
				className={`flex min-h-screen justify-center items-center ${inter.className} bg-wallpaper bg-center bg-cover`}
			>
				<Card
					isBlurred
					className="w-2/3 h-2/3 text-center flex flex-col opacity-95 items-center p-10"
				>
					<Image
						as={NextImage}
						src="/pfp.png"
						width={250}
						height={250}
						alt="Profile Picture"
						radius="lg"
						className="my-5"
					/>

					<h1 className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent text-5xl">
						FireStreaker2
					</h1>
					<p>Fullstack Web Developer</p>
					<div className="flex-row flex gap-5 mt-5">
						{socials.map((social, i) => (
							<Link
								href={social.href}
								className="text-5xl text-blue-200"
								key={i}
							>
								{social.icon}
							</Link>
						))}
					</div>
				</Card>
			</main>
		</>
	);
}
