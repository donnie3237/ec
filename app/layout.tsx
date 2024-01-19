import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MaxHeader from "@/components/maxHeader/maxHeader";
import Footer from "@/components/Footer";
import { NextDevtoolsProvider } from '@next-devtools/core'

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Next.js and Supabase Starter Kit",
	description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body className="bg-background text-foreground">
			<NextDevtoolsProvider>
				<main className="min-h-screen flex flex-col items-center">
					<MaxHeader />
					{children}
					<Footer/>
				</main>
			</NextDevtoolsProvider>
			</body>
		</html>
	);
}
