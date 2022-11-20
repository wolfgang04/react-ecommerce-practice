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
			xs: "320px",
			// => @media (min-width: 320px) { ... }

			sm: "425px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
