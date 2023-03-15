import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function TasteSection() {
	const starRef = useRef(null);
	const starcount = 500;

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
			let size = randRange(0.5, 1) + 'px';
			let glow = randRange(0.5, 1);
			let animationDuration = randRange(4000, 6000) + 'ms';
			let boxShadow = '0px 0px ' + glow + 'px ' + glow / 1.6 + 'px rgba(255, 255, 255, 0.3)';
			html += `<div class="star" style="--x:${x}; --y:${y}; --opacity:${op}; --scale:${s}; --width:${size}; --height:${size}; --boxShadow:${boxShadow}; --animationDuration:${animationDuration}"></div>`;
		}
		starRef.current.innerHTML += html;
	};

	useEffect(() => {
		createStars();
	}, []);

	return (
		<motion.div
			ref={starRef}
			className='h-screen w-full overflow-hidden relative'
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
			<div className='w-[300px] sm:w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left sm:text-center'>
				<motion.h2 className='text-2xl sm:text-4xl '>
					Tastes just like real fruit...
					<span className=' text-2xl sm:text-3xl italic '>because it is real fruit.</span>
				</motion.h2>
			</div>
		</motion.div>
	);
}
