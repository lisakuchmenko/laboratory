import { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const MAX_SCROLL_FOR_FULL = 558;
const MAX_PADDING = (window.innerWidth - (window.innerWidth > 650 ? 1050 : 360)) / 2;
console.log(MAX_PADDING);

export function HeroImage() {
	const imageContainerRef = useRef(null);

	const getHorizontalPadding = (hzPadding, sizeUnit = 'px') => {
		return '0 ' + hzPadding + sizeUnit;
	};

	useEffect(() => {
		if (imageContainerRef.current) {
			imageContainerRef.current.style.paddingLeft = `${MAX_PADDING}px`;
			imageContainerRef.current.style.paddingRight = `${MAX_PADDING}px`;
		}
		const scrollListener = () => {
			const scroll = window.scrollY;
			const percent = 100 - (scroll >= MAX_SCROLL_FOR_FULL ? 100 : scroll / (MAX_SCROLL_FOR_FULL / 100));
			const padding = MAX_PADDING * (percent / 100);
			imageContainerRef.current.style.padding = getHorizontalPadding(padding);
		};
		window.addEventListener('scroll', scrollListener);
		return () => window.removeEventListener('scroll', scrollListener);
	}, []);

	return (
		<div ref={imageContainerRef} className='flex justify-center align-center h-screen'>
			<img className='w-full object-cover h-[90%]' src='/images/hero-bg-mango.png' alt='' />
		</div>
	);
}
