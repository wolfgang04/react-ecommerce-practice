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
			},
		},
	},
	plugins: [],
};
