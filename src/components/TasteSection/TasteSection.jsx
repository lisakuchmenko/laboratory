import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function TasteSection() {
	const starRef = useRef(null);
	const starcount = 400;

	const randRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const createStars = () => {
		let html = '';
		for (let i = 0; i < starcount; i++) {
			let x = randRange(1, 1000) / 10;
			let y = randRange(1, 1000) / 10;
			let op = randRange(2, 5) / 10;
			let s = randRange(100, 300) / 100;
			html += `<div class="star" style="--x:${x}; --y:${y}; --opacity:${op}; --scale:${s};"></div>`;
		}
		starRef.current.innerHTML += html;
	};

	useEffect(() => {
		createStars();
	}, []);

	return (
		<motion.div
			ref={starRef}
			className='h-160 w-full overflow-hidden relative'
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				transition: {
					type: 'easeOut',
					duration: 1,
					delay: 0.3,
				},
			}}
		>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				<motion.h2 className='text-text text-4xl'>Tastes just like real fruit...</motion.h2>
				<h3 className='text-text text-3xl italic text-center'>because it is real fruit.</h3>
			</div>
		</motion.div>
	);
}
