import { useInView, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function AvailableIn() {
	const ref = useRef(null);
	const cursorRef = useRef(null);
	const isInView = useInView(ref);
	const [scrollPosition, setScrollPosition] = useState(0);

	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, 'change', (latest) => {
		setScrollPosition(latest);
	});
	// follow cursor
	// useEffect(() => {
	// 	const cursor = cursorRef.current;
	// 	const follow = (e) => {
	// 		// cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
	// 		cursor.style.top = `${e.clientY}px`;
	// 		cursor.style.left = `${e.clientX}px`;
	// 	};
	// 	window.addEventListener('mousemove', follow);
	// 	return () => window.removeEventListener('mousemove', follow);
	// }, []);

	document.addEventListener('mousemove', (e) => {
		var x = e.clientX;
		var y = e.clientY;

		cursorRef.current.style.left = `${x}px`;
		cursorRef.current.style.top = `${y}px`;
	});

	return (
		<div ref={ref} className='h-full max-w-262.5 mx-auto pb-75'>
			<motion.div
				animate={{
					width: isInView ? '100%' : '0%',
					transition: {
						type: 'easeInOut',
						duration: 1,
						delay: 0.1,
					},
				}}
				className='mt-10 h-2 border-t border-dotted relative'
			>
				<motion.div
					animate={{
						transform: scrollPosition > 1380 ? 'translateY(-4px)' : 'translateY(20px)',
						opacity: scrollPosition > 1380 ? 1 : 0,
						transition: {
							type: 'easeInOut',
							duration: 0.5,
							delay: 0.3,
						},
					}}
					className='text-xs uppercase absolute -top-4'
				>
					available in
				</motion.div>
			</motion.div>
			<div className='text-5xl font-bold'>
				<div className='mango-link relative  '>
					<motion.div
						animate={{
							transform: scrollPosition > 1500 ? 'translateY(-4px)' : 'translateY(20px)',
							opacity: scrollPosition > 1500 ? 1 : 0,
							transition: {
								type: 'easeInOut',
								duration: 0.5,
								delay: 0.3,
							},
						}}
						className='mt-8 link'
					>
						MANGO
					</motion.div>
					<img ref={cursorRef} src='/images/cursor-pack.png' className='follow-img ' />
				</div>
				<motion.div
					animate={{
						transform: scrollPosition > 1600 ? 'translateY(-4px)' : 'translateY(20px)',
						opacity: scrollPosition > 1600 ? 1 : 0,
						transition: {
							type: 'easeInOut',
							duration: 0.5,
							delay: 0.3,
						},
					}}
					className='mt-8'
				>
					BANANA
				</motion.div>
				<motion.div
					animate={{
						transform: scrollPosition > 1700 ? 'translateY(-4px)' : 'translateY(20px)',
						opacity: scrollPosition > 1700 ? 1 : 0,
						transition: {
							type: 'easeInOut',
							duration: 0.5,
							delay: 0.3,
						},
					}}
					className='mt-8'
				>
					PINEAPPLE
				</motion.div>
			</div>
		</div>
	);
}
