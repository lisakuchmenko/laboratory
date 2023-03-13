import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export function TextSection() {
	const headingRef = useRef(null);
	const boxRef = useRef(null);
	const isInView = useInView(headingRef);
	const isBoxInView = useInView(boxRef);

	return (
		<div className='h-full w-full mb-1'>
			<div className='max-w-90 sm:max-w-262.5 mx-auto mb-10'>
				<motion.h2
					ref={headingRef}
					animate={{
						transform: isInView ? 'translateY(0px)' : 'translateY(50px)',
						opacity: isInView ? 1 : 0,
						transition: {
							type: 'easeInOut',
							duration: 0.8,
							delay: 0.8,
						},
					}}
					className='text-5xl sm:text-6xl font-bold w-[360px] sm:w-175 mt-10'
				>
					<span className='inline-block mr-20 sm:mr-0'>I</span> FINISHED THE BAG & REGRET NOTHING.
				</motion.h2>
			</div>
			<motion.div
				ref={boxRef}
				animate={{
					width: isBoxInView ? '100%' : '0%',
					transition: {
						type: 'easeOut',
						duration: 1,
						delay: 0.5,
					},
				}}
				className='mt-6 h-2 border-b border-dotted '
			></motion.div>
			<div className='flex justify-between items-center w-full h-[200px]'>
				<motion.div
					ref={boxRef}
					animate={{
						transform: isBoxInView ? 'translateY(0px)' : 'translateY(20px)',
						opacity: isBoxInView ? 1 : 0,
						transition: {
							type: 'easeInOut',
							duration: 0.5,
							delay: 0.5,
						},
					}}
					className='p-4 sm:p-10 text-xl sm:text-4xl grow font-bold '
				>
					<span className='inline-block mr-10 sm:mr-0'>SO</span> CRUNCHY I GET NOISE COMPLAINTS.
				</motion.div>
				<motion.div
					ref={boxRef}
					animate={{
						scaleY: isBoxInView ? 1 : 0,
						transition: {
							type: 'easeOut',
							duration: 1,
							delay: 0.5,
						},
					}}
					className='w-px border-r border-dotted h-full line-style'
				></motion.div>
				<motion.div
					ref={boxRef}
					animate={{
						transform: isBoxInView ? 'translateY(0px)' : 'translateY(20px)',
						opacity: isBoxInView ? 1 : 0,
						transition: {
							type: 'easeInOut',
							duration: 0.5,
							delay: 0.5,
						},
					}}
					className='p-6 sm:p-10 text-xs sm:text-4xl font-bold sm:w-120'
				>
					THIS IS WHAT "FRUIT SNACKS" SHOULD HAVE ALWAYS BEEN
				</motion.div>
			</div>
			<motion.div
				ref={boxRef}
				animate={{
					width: isBoxInView ? '100%' : '0%',
					transition: {
						type: 'easeOut',
						duration: 1,
						delay: 0.5,
					},
				}}
				className='h-px border-t border-dotted '
			></motion.div>
		</div>
	);
}
