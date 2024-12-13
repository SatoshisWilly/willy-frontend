"use client"

import {useEffect, useRef} from 'react';

export default function ScrollWaves() {
	const topWaveRef    = useRef<HTMLDivElement>(null);
	const bottomWaveRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		let topX       = 0;
		let bottomX    = 0;
		let resetPoint = 0;
		let animationFrameId: number;

		if (topWaveRef.current) {
			const containerWidth = topWaveRef.current.scrollWidth;
			resetPoint           = containerWidth / 2;
		}

		const animate = () => {
			topX += 0.5;
			if (topX >= resetPoint) topX = 0;
			if (topWaveRef.current) {
				topWaveRef.current.style.transform = `translateX(-${topX}px)`;
			}

			bottomX += 0.5;
			if (bottomX >= resetPoint) bottomX = 0;
			if (bottomWaveRef.current) {
				bottomWaveRef.current.style.transform = `translateX(${bottomX}px)`;
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<>
			<div className="absolute inset-x-0 -top-[20px] overflow-hidden">
				<div
					ref={topWaveRef}
					className="wave-container"
					style={{transform: 'translateX(0px)'}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 80" className="wave-segment fill-orange-500"
					     preserveAspectRatio="none">
						<path
							d="M0,40 C120,20 240,80 360,40 C480,0 600,80 720,40 C840,0 960,80 1080,40 C1200,0 1320,80 1440,40 L1440,0 L0,0 Z"/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 80" className="wave-segment fill-orange-500"
					     preserveAspectRatio="none">
						<path
							d="M0,40 C120,20 240,80 360,40 C480,0 600,80 720,40 C840,0 960,80 1080,40 C1200,0 1320,80 1440,40 L1440,0 L0,0 Z"/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 80" className="wave-segment fill-orange-500"
					     preserveAspectRatio="none">
						<path
							d="M0,40 C120,20 240,80 360,40 C480,0 600,80 720,40 C840,0 960,80 1080,40 C1200,0 1320,80 1440,40 L1440,0 L0,0 Z"/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 80" className="wave-segment fill-orange-500"
					     preserveAspectRatio="none">
						<path
							d="M0,40 C120,20 240,80 360,40 C480,0 600,80 720,40 C840,0 960,80 1080,40 C1200,0 1320,80 1440,40 L1440,0 L0,0 Z"/>
					</svg>
				</div>
			</div>

			<div className="absolute inset-x-0 bottom-8 transform rotate-180 translate-y-32 overflow-hidden">
				<div
					ref={bottomWaveRef}
					className="wave-container"
					style={{transform: 'translateX(0px)'}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 80" className="wave-segment fill-green-200"
					     preserveAspectRatio="none">
						<path
							d="M0,40 C120,60 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,80 L0,80 Z"/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 80" className="wave-segment fill-green-200"
					     preserveAspectRatio="none">
						<path
							d="M0,40 C120,60 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,80 L0,80 Z"/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 80" className="wave-segment fill-green-200"
					     preserveAspectRatio="none">
						<path
							d="M0,40 C120,60 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,80 L0,80 Z"/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 80" className="wave-segment fill-green-200"
					     preserveAspectRatio="none">
						<path
							d="M0,40 C120,60 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,80 L0,80 Z"/>
					</svg>
				</div>
			</div>
		</>
	);
}
