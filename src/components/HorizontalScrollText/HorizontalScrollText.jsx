import { useRef, useEffect } from 'react';

export function HorizontalScrollText() {
	const textRef = useRef(null);

	window.onscroll = () => {
		const scroll = window.scrollY - 800;
		textRef.current.style.right = `${scroll}px`;
	};

	return (
		<div className='h-140 flex items-center relative overflow-hidden'>
			<h2
				ref={textRef}
				className='overflow-hidden uppercase font-bold text-9xl whitespace-nowrap absolute top-75 -right-[800px] '
			>
				zero added sugar
			</h2>
		</div>
	);
}
