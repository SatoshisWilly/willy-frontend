import type {Config} from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme  : {
		extend: {
			colors   : {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			keyframes: {
				beat: {
					'0%, 100%': {transform: 'scale(1)'},
					'50%'     : {transform: 'scale(1.2)'},
				},
			},
			animation: {
				beat       : 'beat 1s ease-in-out infinite',
				'spin-slow': 'spin 20s linear infinite',
			},
		},
	},
	plugins: [],
} satisfies Config;
