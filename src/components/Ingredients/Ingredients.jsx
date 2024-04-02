import { motion } from 'framer-motion';
import { useAppContext } from '../Context';

export function Ingredients() {
	const { product } = useAppContext();
	console.log(product);
	return (
		<motion.div
			className='w-11/12 3xl:w-380 mx-auto mt-75 gap-[30px] text-[44px] leading-[73px]'
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div
				className='text-center '
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
				<h2>Only one ingredient:</h2>
				<h3 className='text-[80px] leading-[132px]  mt-[30px] capitalize text-white opacity-50 font-normal'>{product?.name}</h3>
				<motion.img
					initial={{ opacity: 0,y:45 }}
					whileInView={{
						opacity: 1,
						y:0,
						transition: {
							type: 'easeOut',
							duration: 1,
							delay: 0.3,
						},
					}} 
					src={`/images/${product?.ingredien_img}`}
					className='min-w-[222px] mx-auto mt-[70px]'
					alt={product?.name}
					/>
			</motion.div>
		</motion.div>
	);
}
