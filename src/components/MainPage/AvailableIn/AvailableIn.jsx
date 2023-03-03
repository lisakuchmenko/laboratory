import { useInView, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from './Arrow';

export function AvailableIn() {
	const ref = useRef(null);
	const cursorRef = useRef(null);
	const isInView = useInView(ref);
	const [scrollPosition, setScrollPosition] = useState(0);

	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, 'change', (latest) => {
		setScrollPosition(latest);
	});

	// useEffect(() => {
	// 	const cursor = cursorRef.current;
	// 	const handleMouseMove = (e) => {
	// 		cursor.style.left = e.clientX + 'px';
	// 		cursor.style.top = e.clientY + 'px';
	// 	};
	// 	window.addEventListener('mousemove', handleMouseMove);
	// 	return () => window.removeEventListener('mousemove', handleMouseMove);
	// }, []);

	return (
		<div ref={ref} className='h-full max-w-262.5 mx-auto pb-48 relative '>
			<motion.div
				animate={{
					width: isInView ? '100%' : '0%',
					transition: {
						type: 'easeInOut',
						duration: 1,
						delay: 0.1,
					},
				}}
				className='mt-6 h-2 border-t border-dotted '
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
			<div className='text-5xl font-bold '>
				<div className='mango-link flex justify-between items-center'>
					<motion.div
						animate={{
							transform: scrollPosition > 1470 ? 'translateY(-4px)' : 'translateY(20px)',
							opacity: scrollPosition > 1470 ? 1 : 0,
							transition: {
								type: 'easeInOut',
								duration: 0.5,
								delay: 0.3,
							},
						}}
						className='mt-4 link cursor-pointer'
					>
						<span className='inline-block mr-32 align-middle text-xxs'>01</span>
						MANGO
					</motion.div>
					<div className='opacity-0 hovered'>
						<Arrow />
					</div>
					{/* <img ref={cursorRef} src='/images/cursor-mango.png' className='follow-img ' /> */}
				</div>
				<div className='banana-link flex justify-between items-center'>
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
						className='mt-4'
					>
						<span className='inline-block mr-32 align-middle text-xxs'>02</span>
						BANANA
					</motion.div>
					<div className='opacity-0 hovered'>
						<Arrow />
					</div>
					{/* <img ref={cursorRef} src='/images/cursor-banana.png' className='follow-img ' /> */}
				</div>
				<div className='pineapple-link flex justify-between items-center'>
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
						className='mt-4'
					>
						<span className='inline-block mr-32 align-middle text-xxs'>03</span>
						PINEAPPLE
					</motion.div>
					<div className='opacity-0 hovered'>
						<Arrow />
					</div>
				</div>
			</div>
		</div>
	);
}
