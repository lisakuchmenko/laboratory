import { useRef, useEffect } from 'react';

export function HorizontalScrollText() {
	const textRef = useRef(null);

	window.onscroll = () => {
		if (window.innerWidth < 768) {
			const scroll = window.scrollY - 1000;
			textRef.current.style.right = `${scroll}px`;
			return;
		}
		const scroll = window.scrollY - 800;
		textRef.current.style.right = `${scroll}px`;
	};

	return (
		<div className='h-140 flex items-center relative overflow-hidden'>
			<h2
				ref={textRef}
				className='overflow-hidden uppercase font-bold text-5xl sm:text-9xl whitespace-nowrap absolute top-75 -right-[1000px] sm:-right-[800px] '
			>
				zero added sugar
			</h2>
		</div>
	);
}
