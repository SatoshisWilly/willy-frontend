"use client";
import {useEffect, useState} from "react";

export default function PumpingWilly() {
	const [scrollY, setScrollY]                 = useState(0);
	const [maxScrollHeight, setMaxScrollHeight] = useState(0);
	const [balloonWidth, setBalloonWidth]       = useState(100);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		const handleResize = () => {
			const documentHeight = document.documentElement.scrollHeight;
			const windowHeight   = window.innerHeight;
			setMaxScrollHeight(documentHeight - windowHeight);
			setBalloonWidth(window.innerWidth < 1260 ? 50 : 100);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const balloonHeight = (typeof window !== 'undefined')
		? Math.min((scrollY / maxScrollHeight) * window.innerHeight, window.innerHeight)
		: 0;

	return (
		<div className="fixed bottom-10 right-10 z-30">
			{balloonHeight > 0 && (
				<div
					className="relative bg-[#F7931A] rounded-full border-2 border-orange-300"
					style={{
						width     : `${balloonWidth}px`,
						height    : `${balloonHeight}px`,
						transition: "width 0.1s, height 0.1s",
					}}
				>
					<div
						className="absolute rounded-full bg-[#F7931A] border-2 border-orange-300"
						style={{
							width : `${balloonWidth * 1.3}px`,
							height: `${balloonWidth * 1.3}px`,
							bottom: `-${balloonWidth * 0.2}px`,
							left  : `-${balloonWidth * 0.5}px`,
						}}
					></div>
					<div
						className="absolute rounded-full bg-[#F7931A] border-2 border-orange-300 border-l-transparent"
						style={{
							width : `${balloonWidth * 1.3}px`,
							height: `${balloonWidth * 1.3}px`,
							bottom: `-${balloonWidth * 0.2}px`,
							right : `-${balloonWidth * 0.5}px`,
						}}
					></div>
				</div>
			)}
		</div>
	);
}
