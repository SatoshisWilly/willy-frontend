export default function MarqueeText() {
	return (
		<div className="relative z-20 -mt-60">
			<div className="relative h-10 overflow-hidden transform skew-y-6">
				<div className="absolute w-full h-full bg-[#F7931A] border-2 border-orange-500">
					<div
						className="absolute w-[200%] animate-marquee whitespace-nowrap text-white text-4xl font-bold flex items-center h-full">
						{Array(50)
							.fill("$WILLY to a Billy -")
							.map((text, i) => (
								<span key={i} className="mr-4">
									{text}
								</span>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}