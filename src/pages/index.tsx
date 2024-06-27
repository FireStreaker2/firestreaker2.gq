import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<h1 className="bg-gradient-to-r to-blue-300 bg-clip-text text-transparent from-blue-500">
				FireStreaker2
			</h1>
		</main>
	);
}
