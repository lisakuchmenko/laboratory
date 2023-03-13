import { motion } from 'framer-motion';

export function HeroText() {
	return (
		<div className='w-full h-screen flex place-items-center '>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						type: 'easeOut',
						duration: 0.8,
						delay: 0.3,
					},
				}}
				className='text-3xl sm:text-4.5xl max-w-[350px] sm:max-w-[800px] mx-auto text-center'
			>
				We’re bringing fruit snacks back to their roots with{' '}
				<motion.span className='italic'>perfectly ripe fruit bursting with flavor</motion.span>.
			</motion.div>
		</div>
	);
}
