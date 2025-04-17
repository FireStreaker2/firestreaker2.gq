import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <main className="bg-background text-foreground light">
        <Component {...pageProps} />
      </main>
    </HeroUIProvider>
  );
}
