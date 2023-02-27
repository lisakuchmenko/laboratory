/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			sportingGrotesque: ['Sporting Grotesque', 'sans-serif'],
		},
		fontSize: {
			xxs: '0.55rem',
			xs: '0.6rem',
			s: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem',
			'10xl': '9rem',
		},
		letterSpacing: {
			widest: '0.25em',
		},
		borderRadius: {
			none: '0',
			xs: '0.0625rem',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			full: '9999px',
			large: '12px',
		},
		extend: {
			spacing: {
				0.125: '0.05px',
				140: '560px',
				150: '600px',
				160: '640px',
				164: '660px',
				175: '700px',
			},
		},
		colors: {
			primary: '#272028',
			text: '#D6CDC4',
			product: {
				0: '#f3a104',
				1: '#dfe022',
				2: '#46ceba',
				3: '#ef2b76',
				4: '#f5f5ea',
			},
			grey: '#9e9e9e',
		},
	},
	plugins: [],
};
