import { motion } from 'framer-motion';
import { useAppContext } from '../Context';

export function CloseButton() {
	const { setOpenMenu } = useAppContext();
	return (
		<motion.button className='h-2.5 w-5 flex relative cursor-pointer pl-2 mt-0.5' onClick={() => setOpenMenu(false)}>
			<motion.div
				animate={{ rotate: '225deg' }}
				transition={{ ease: 'linear', duration: 0.5 }}
				className='w-5 h-0.5 bg-primary absolute'
			></motion.div>
			<motion.div
				animate={{ rotate: '135deg', width: '20px' }}
				transition={{ ease: 'linear', duration: 0.5 }}
				className='w-3 h-0.5 bg-primary absolute'
			></motion.div>
		</motion.button>
	);
}
