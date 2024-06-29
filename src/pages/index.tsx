import { JSX } from "react";
import { Inter } from "next/font/google";
import { Card, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { FaDiscord, FaGithub, FaReddit, FaSpotify } from "react-icons/fa";

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
						<Link href={social.href} className="text-5xl text-blue-200" key={i}>
							{social.icon}
						</Link>
					))}
				</div>
			</Card>
		</main>
	);
}
