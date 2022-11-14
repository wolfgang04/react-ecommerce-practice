/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				Orange: "hsl(26, 100%, 55%)",
				"pale-orange": "hsl(25, 100%, 94%)",
				"light-grayish-blue": "hsl(223, 64%, 98%)",
				"grayish-blue": "hsl(220, 14%, 75%)",
				"dark-grayish-blue": "hsl(219, 9%, 45%)",
			},
		},
		screens: {
			sm: { min: "320px", max: "767px" },
			md: { min: "768px", max: "1024px" },
			lg: { min: "1025px", max: "1440px" },
			xl: { min: "1441px" },
		},
	},
	plugins: [],
};
