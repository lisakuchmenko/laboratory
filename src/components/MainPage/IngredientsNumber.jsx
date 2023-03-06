import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export function IngredientsNumber() {
	const firstLine = useRef(null);
	const secondLine = useRef(null);

	const isInView = useInView(firstLine);
	const isSecondLineInView = useInView(secondLine);

	return (
		<div className='w-full h-screen text-2xl flex flex-col justify-center items-center '>
			<motion.div
				ref={firstLine}
				animate={{
					transform: isInView ? 'translateY(0px)' : 'translateY(20px)',
					opacity: isInView ? 1 : 0,
					transition: {
						type: 'spring',
	
						stiffness: 50,
						delay: 0.3,
					},
				}}
			>
				Number of
			</motion.div>
			<motion.div
				ref={secondLine}
				animate={{
					transform: isSecondLineInView ? 'translateY(0px)' : 'translateY(20px)',
					opacity: isSecondLineInView ? 1 : 0,
					transition: {
						type: 'spring',
						stiffness: 50,
						delay: 0.35,
					},
				}}
				className='italic'
			>
				ingredients:
			</motion.div>
		</div>
	);
}
