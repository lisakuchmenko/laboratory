import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SmileyFace } from './SmileyFace';

export function StarsSection() {
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
		<>
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
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					<motion.h2 className='text-4xl text-center'>Guilt-free satisfaction for</motion.h2>
					<div className='text-4xl italic text-center -mt-4'>every occasion.</div>
					<p className='text-s italic  w-64 mx-auto mt-10'>
						Yes, you can actually eat TALA in space. Now you just have to figure out how to get there.
					</p>
					<div className='w-11.8 h-11.8 animation-spin mx-auto mt-20'>
						<SmileyFace />
					</div>
				</div>
			</motion.div>
		</>
	);
}
