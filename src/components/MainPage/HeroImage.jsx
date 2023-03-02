import { useRef, useEffect, useState } from 'react';

export function HeroImage() {
	const [width, setWidth] = useState(1050);
	const ref = useRef(null);

	// change image width on scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setWidth(1050 - window.scrollY / 2);
			} else {
				setWidth(1050);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className=' mx-auto' style={{ maxWidth: width + 'px' }}>
			<img ref={ref} src='/images/hero-bg-mango.png' alt='' />
		</div>
	);
}
