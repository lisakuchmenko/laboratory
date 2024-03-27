import { motion, useInView } from 'framer-motion';
import { useAppContext } from '../Context';
import { useRef } from 'react';

export function CloseButton() {
	const { setOpenMenu } = useAppContext();
	const ref = useRef(null);
	const isInView = useInView(ref);
	const buttonRef = useRef(null);

	function onTap(event, info) {
		buttonRef.current.style.transform = 'rotate(45deg)';
	}

	return (
		<motion.button
			ref={buttonRef}
			onTap={onTap}
			className='h-5 w-5 flex relative cursor-pointer'
			onClick={() => setOpenMenu(false)}
		>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ ease: 'linear', duration: 0.3 }}
				variants={{
					visible: { rotate: '135deg' },
					hidden: { rotate: 0 },
				}}
				className='w-5 h-0.5 top-[8px] right-[0px] bg-primary absolute'
			></motion.div>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ ease: 'linear', duration: 0.3 }}
				variants={{
					visible: { rotate: '45deg', width: '20px' },
					hidden: { rotate: 0, width: '12px' },
				}}
				className='h-0.5 bg-primary top-[8px] right-[0px] absolute'
			></motion.div>
		</motion.button>
	);
}
