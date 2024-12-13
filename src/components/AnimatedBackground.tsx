export default function AnimatedBackground() {
	return (
		<div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-orange-300 opacity-70">
			<div className="absolute min-h-[100vh] min-w-[100vw] h-[1000px] w-[1000px] animate-spin-slow"
			     style={{
				     width : 'max(100vw, 3000px)',
				     height: 'max(100vh, 3000px)'
			     }}>
				<div className="relative h-full w-full">
					{[...Array(12)].map((_, i) => (
						<div
							key={i}
							className="absolute inset-0 bg-orange-100 opacity-50"
							style={{
								transform: `rotate(${i * 30}deg)`,
								clipPath : "polygon(50% 50%, calc(50% - 100px) 0%, calc(50% + 100px) 0%)",
							}}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}