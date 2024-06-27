import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<main className="light text-foreground bg-background">
				<Component {...pageProps} />
			</main>
		</NextUIProvider>
	);
}
