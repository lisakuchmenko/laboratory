import { useRef, useEffect } from 'react';

export function HorizontalScrollText() {
	const textRef = useRef(null);

	window.onscroll = () => {
		const scroll = window.scrollY - 800;
		textRef.current.style.right = `${scroll}px`;
	};

	return (
		<div className='h-140 flex items-center relative'>
			<h2
				ref={textRef}
				className='uppercase text-text font-bold text-9xl whitespace-nowrap absolute top-[300px] -right-[800px] '
			>
				zero added sugar
			</h2>
		</div>
	);
}
