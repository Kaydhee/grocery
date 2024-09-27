/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			red: '#ff0000',
			blue: '#0000ff',
			black: '#000000',
			yellow: 'RGB(248, 197, 25)',
			green: 'RGB(81, 158, 127)',
			greenLight: 'rgb(11, 133, 84)',
			white: '#ffffff',
			gray: '#CCCCCC',

			transparent: 'transparent',

			transition: 'all 500ms ease',
		},

		screens: {
			sm: '576px',

			md: '960px',

			lg: '1024px',
		},

		plugins: [],
	},
};
