import { motion } from 'framer-motion';

export function SnackBetter() {
	return (
		<div className='h-160 flex justify-center items-center'>
			<motion.img className='-right-160 top-6 relative scale-75' src='/images/box.png' alt='' />
			<motion.img className='z-10 top-3 -right-75 relative scale-90' src='/images/box.png' alt='' />
			<motion.img className='z-20 relative' src='/images/box.png' alt='' />
			<motion.img className='z-10 top-3 -left-75 relative scale-90 ' src='/images/box.png' alt='' />
			<motion.img className='-left-160 top-6 relative scale-75' src='/images/box.png' alt='' />
		</div>
	);
}
