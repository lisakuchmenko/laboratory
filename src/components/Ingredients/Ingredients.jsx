import { motion } from 'framer-motion';
import { useAppContext } from '../Context';

export function Ingredients() {
	const { product } = useAppContext();
	return (
		<motion.div
			className='h-140 flex items-center justify-center text-3xl'
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
				<h2>Ingredient(s):</h2>
				<h3 className='italic capitalize'>{product.name}</h3>
			</motion.div>
		</motion.div>
	);
}
