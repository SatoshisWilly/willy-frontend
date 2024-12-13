import {FaTelegramPlane, FaTiktok} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

export default function SocialLinks() {
	return (
		<div className="flex items-center sm:space-x-4">
			<a href="https://x.com/SatoshisWilly" target="_blank" rel="noopener noreferrer">
				<FaXTwitter
					className="text-white hover:text-black/80 scale-75 sm:scale-100 transform transition hover:scale-150"
					size={24}/>
			</a>
			<a href="https://t.me/SatoshisWilly" target="_blank" rel="noopener noreferrer">
				<FaTelegramPlane
					className="text-white hover:text-black/80 scale-75 sm:scale-100 transform transition hover:scale-150"
					size={24}/>
			</a>
			<a href="https://www.tiktok.com/@satoshiswilly" target="_blank" rel="noopener noreferrer">
				<FaTiktok className="text-white hover:text-black/80 scale-75 sm:scale-100 transform transition hover:scale-150"
				          size={24}/>
			</a>
			<a
				href="https://raydium.io/swap/?inputMint=sol&outputMint=4zUmw6iTRhREKZLv1p7mLADrMHXG7XZ78h24fpsMmfQc"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-1 h-8 sm:h-10 px-2 sm:px-4 bg-green-500 hover:bg-green-600 text-black border-2 border-black rounded-full font-bold animate-beat flex items-center justify-center"
			>
				BUY
			</a>
		</div>
	);
}