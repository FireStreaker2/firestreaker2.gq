import { JSX } from "react";
import Head from "next/head";
import NextImage from "next/image";
import { Inter } from "next/font/google";
import { Card, Image, Link } from "@nextui-org/react";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      icon: <MdEmail />,
      href: "mailto:help@firestreaker2.gq"
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
        className={`flex min-h-screen animate-fade items-center justify-center ${inter.className} bg-wallpaper bg-cover bg-center`}
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
            className="my-5 transition-transform duration-100 ease-in-out hover:rotate-2 hover:scale-110"
            isBlurred
            priority
          />

          <h1 className="animate-gradient bg-gradient-to-r from-blue-300 via-blue-700 to-blue-300 bg-200 bg-clip-text text-5xl text-transparent">
            FireStreaker2
          </h1>
          <p>Fullstack Web Developer</p>
          <div className="mt-5 flex flex-row gap-5">
            {socials.map((social) => (
              <Link
                href={social.href}
                target="_blank"
                className="text-5xl text-blue-200 transition-transform duration-200 ease-in-out hover:scale-125"
                key={social.href}
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
