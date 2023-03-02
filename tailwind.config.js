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
			'4.5xl': '2.5rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'8.5xl': '7rem',
			'9xl': '8rem',
			'10xl': '9rem',
			'11xl': '10rem',
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
		scale: {
			75: '.75',
			80: '0.8',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
		},
		extend: {
			spacing: {
				0.125: '0.05px',
				25: '100px',
				30: '120px',
				75: '300px',
				110: '440px',
				120: '480px',
				121.75: '487px',
				130: '520px',
				140: '560px',
				147.5: '590px',
				150: '600px',
				160: '640px',
				164: '660px',
				175: '700px',
				190: '760px',
				262: '1050px',
			},
		},
		colors: {
			primary: '#232025',
			text: '#D6CDC4',
			product: {
				0: '#f3a104',
				1: '#dfe022',
				2: '#46ceba',
				3: '#ef2b76',
				4: '#f5f5ea',
			},
			grey: '#9e9e9e',
			lightGrey: '#d3d3d353',
			light: '#d5cdc4',
			dark: '#232025',
		},
		maxWidth: {
			75: '300px',
			262.5: '1050px',
		},
		minWidth: {
			121.75: '487px',
		},
	},
	plugins: [],
};
