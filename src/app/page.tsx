"use client";

import Tagline from "@/components/Sections/Tagline";
import Mission from "@/components/Sections/Mission";
import Army from "@/components/Sections/Army";
import PumpingWilly from "@/components/PumpingWilly";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header/Header";
import CenterLogo from "@/components/CenterLogo";
import MarqueeText from "@/components/MarqueeText";
import ScrollWaves from "@/components/ScrollWaves";

export default function Home() {

	return (
		<main className="relative h-screen bg-orange-500">

			<Header/>
			<AnimatedBackground/>
			<CenterLogo/>
			<MarqueeText/>
			<PumpingWilly/>

			<div className="space-y-48">
				<Tagline/>
				<div className="relative bg-green-200">
					<ScrollWaves/>
					<Mission/>
				</div>
				<Army/>
			</div>
			<footer className="mt-20 bg-orange-300 text-black text-center p-4 font-mono">
				&copy; {new Date().getFullYear()} Satoshi's Willy. All rights reserved.
			</footer>
		</main>
	);
}
