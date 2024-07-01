import { JSX } from "react";
import Head from "next/head";
import NextImage from "next/image";
import { Inter } from "next/font/google";
import { Card, Image, Link } from "@nextui-org/react";
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
      href: "https://github.com/FireStreaker2"
    },
    {
      icon: <FaSpotify />,
      href: "https://open.spotify.com/user/a2okhh9x1dg64e5l6kbejlclt?si=9672334a4b2d4e7f"
    },
    {
      icon: <FaDiscord />,
      href: "https://discord.com/users/696037677962887248"
    },
    {
      icon: <FaReddit />,
      href: "https://www.reddit.com/user/FireStreaker2"
    }
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
        <meta property="og:url" content="https://firestreaker2.gq" />
        <meta property="og:image" content="http://firestreaker2.gq/pfp.png" />
        <meta property="og:description" content="FireStreaker2's Website" />
        <meta name="theme-color" content="#00b2ff" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>FireStreaker2&apos;s Website</title>
        <link rel="icon" type="image/x-icon" href="/pfp.png" />
      </Head>
      <main
        className={`flex min-h-screen items-center justify-center ${inter.className} bg-wallpaper bg-cover bg-center`}
      >
        <Card
          isBlurred
          className="flex h-2/3 w-2/3 flex-col items-center p-10 text-center opacity-95"
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

          <h1 className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-5xl text-transparent">
            FireStreaker2
          </h1>
          <p>Fullstack Web Developer</p>
          <div className="mt-5 flex flex-row gap-5">
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
