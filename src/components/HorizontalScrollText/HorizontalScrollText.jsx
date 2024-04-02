import { useRef, useEffect } from 'react';

export function HorizontalScrollText() {
	const textRef = useRef(null);

	window.onscroll = () => {
		if (window.innerWidth < 768) {
			const scroll = window.scrollY - 1000;
			textRef.current.style.right = `${scroll}px`;
			return;
		}
		const scroll = window.scrollY - 1200;
		textRef.current.style.right = `${scroll}px`;
	};

	return (
		<section className='h-160 flex items-center relative overflow-hidden'>
			<h2
				ref={textRef}
				className='overflow-hidden uppercase font-normal text-[120px] 3xl:text-[180px] leading-[297px] text-text whitespace-nowrap absolute top-75 -right-[1500px] '
			>
				zero added sugar
			</h2>
		</section>
	);
}
