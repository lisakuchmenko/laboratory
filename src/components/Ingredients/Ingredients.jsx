import { motion } from 'framer-motion';

export function Ingredients({ product }) {
	return (
		<motion.div
			className='h-140 flex items-center justify-center'
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div
				className='text-center'
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
				<h2 className='text-3xl text-text'>Ingredient(s):</h2>
				<h3 className='text-3xl text-text italic capitalize'>{product}</h3>
			</motion.div>
		</motion.div>
	);
}
