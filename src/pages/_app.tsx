import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className="bg-background text-foreground light">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
