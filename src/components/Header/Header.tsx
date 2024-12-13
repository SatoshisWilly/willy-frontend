"use client";
import {useCallback} from "react";
import {toast} from "react-hot-toast";
import SocialLinks from "./SocialLinks";

export default function Header() {
	const address = "4zUmw6iTRhREKZLv1p7mLADrMHXG7XZ78h24fpsMmfQc";

	const copyToClipboard = useCallback(() => {
		navigator.clipboard.writeText(address).then(
			() => {
				toast.success("Address copied to clipboard!");
			},
			(err) => {
				console.error("Failed to copy address: ", err);
				toast.error("Failed to copy address.");
			}
		);
	}, [address]);

	return (
		<div className="sticky top-5 m-auto max-w-6xl z-50">
			<div
				className="rounded-t-2xl sm:rounded-full bg-orange-600 text-white py-2 sm:px-6 shadow-lg shadow-black/50 border-2 border-black flex items-center justify-between">
				<h1
					className="text-xl font-mono truncate cursor-copy"
					onClick={copyToClipboard}
					title="Click to copy"
				>
					{address}
				</h1>
				<SocialLinks/>
			</div>

			<div
				className="absolute inset-x-0 mt-[-1px] sm:max-w-xl sm:mx-auto py-1 rounded-b-2xl bg-orange-400 text-black shadow-lg shadow-black/50 border-2 border-black flex items-center justify-center">
				<h1 className="text-2xl font-mono font-bold truncate">
					SATOSHI&apos;S WILLY
				</h1>
			</div>
		</div>
	);
}
