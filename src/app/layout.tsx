import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Toaster} from "react-hot-toast";

const geistSans = localFont({
	                            src     : "./fonts/GeistVF.woff",
	                            variable: "--font-geist-sans",
	                            weight  : "100 900",
                            });
const geistMono = localFont({
	                            src     : "./fonts/GeistMonoVF.woff",
	                            variable: "--font-geist-mono",
	                            weight  : "100 900",
                            });

export const metadata: Metadata = {
	title      : "Satoshi's Willy",
	description:
		"Nothing pumps harder than Satoshi's Willy. Ai meme programmed to shill itself to a billy and beyond. Are your hands strong enough to hold the legendary Willy?",
	openGraph  : {
		title      : "Satoshi's Willy",
		description:
			"Nothing pumps harder than Satoshi's Willy. Ai meme programmed to shill itself to a billy and beyond. Are your hands strong enough to hold the legendary Willy?",
		images     : [
			{
				url   : "/willy.jpg",
				width : 1200,
				height: 630,
				alt   : "Satoshi's Willy - Legendary Meme",
			},
		],
	},
	twitter    : {
		card       : "summary_large_image",
		title      : "Satoshi's Willy",
		description:
			"Nothing pumps harder than Satoshi's Willy. Ai meme programmed to shill itself to a billy and beyond. Are your hands strong enough to hold the legendary Willy?",
		images     : ["/willy.jpg"],
	},
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body
			className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-500`}
		>
		{children}
		<Toaster/>
		</body>
		</html>
	);
}
