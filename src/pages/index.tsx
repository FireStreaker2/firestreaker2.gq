import { JSX } from "react";
import Head from "next/head";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import { Card, Link } from "@nextui-org/react";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pfp from "../../public/pfp.webp";

const font = JetBrains_Mono({ subsets: ["latin"] });

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
        <meta property="og:image" content="http://firestreaker2.gq/pfp.webp" />
        <meta property="og:description" content="FireStreaker2's Website" />
        <meta name="theme-color" content="#00b2ff" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>FireStreaker2&apos;s Website</title>
        <link rel="icon" type="image/x-icon" href="/pfp.webp" />
      </Head>
      <main
        className={`flex min-h-screen animate-fade items-center justify-center ${font.className} bg-wallpaper bg-cover bg-center`}
      >
        <Card
          isBlurred
          className="flex h-5/6 w-11/12 flex-col items-center p-5 text-center opacity-95 sm:p-10 md:h-2/3 md:w-2/3"
        >
          <Image
            src={pfp}
            alt="Profile Picture"
            className="my-5 h-auto w-36 rounded-lg transition-transform duration-100 ease-in-out hover:rotate-2 hover:scale-110 md:w-64"
            sizes="250px"
            priority
          />

          <h1 className="animate-gradient bg-gradient-to-r from-blue-300 via-blue-700 to-blue-300 bg-200 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl">
            FireStreaker2
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Fullstack Web Developer
          </p>
          <div className="mt-5 flex flex-row gap-2 sm:gap-3 md:gap-5">
            {socials.map((social) => (
              <Link
                href={social.href}
                target="_blank"
                className="text-3xl text-blue-200 transition-transform duration-200 ease-in-out hover:scale-125 sm:text-4xl md:text-5xl"
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
