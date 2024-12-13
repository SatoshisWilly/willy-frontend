export default function CenterLogo() {
	return (
		<div className="relative z-10 flex h-full items-center justify-center">
			<img
				src="/willy-logo.webp"
				alt="Logo"
				className="max-w-[80%] max-h-[80%] object-contain animate-bounce"
			/>
		</div>
	);
}