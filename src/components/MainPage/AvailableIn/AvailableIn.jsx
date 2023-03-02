import { useInView, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

export function AvailableIn() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const [scrollPosition, setScrollPosition] = useState(0);

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setScrollPosition(latest);
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
		</div>
	);
}
