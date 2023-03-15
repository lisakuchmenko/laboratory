import { useRef, useEffect, useState } from 'react';
import { motion, transform } from 'framer-motion';

export function SnackBetter() {
	const variants = { scale: 1.1, rotate: 8, transition: { duration: 0.3 } };
	const isMobile = window.innerWidth < 640;

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,

				transition: {
					duration: 0.8,
					delay: 0.3,
				},
			}}
			className='h-40 sm:h-120 pt-16 sm:pt-0 mx-auto'
		>
			<h2 className='text-3xl text-center mt-16 mb-12'>Snack Better.</h2>
			{!isMobile && (
				<motion.div className='flex justify-center items-center'>
					<motion.img
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,

							transition: {
								duration: 0.2,
								delay: 0.3,
							},
						}}
						whileHover={variants}
						className='-right-140 relative '
						src='/images/box-2.png'
						alt=''
					/>
					<motion.img
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,

							transition: {
								duration: 0.2,
								delay: 0.25,
							},
						}}
						whileHover={variants}
						className='z-10 -right-75 relative'
						src='/images/box-1.png'
						alt=''
					/>
					<motion.img
						initial={{ opacity: 0, y: 50 }}
						whileHover={variants}
						whileInView={{
							opacity: 1,
							y: 0,

							transition: {
								duration: 0.2,
								delay: 0.2,
							},
						}}
						className='z-30 relative '
						src='/images/box.png'
						alt=''
					/>
					<motion.img
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,

							transition: {
								duration: 0.2,
								delay: 0.25,
							},
						}}
						whileHover={variants}
						className='z-10 -left-75 relative '
						src='/images/box-1.png'
						alt=''
					/>
					<motion.img
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,

							transition: {
								duration: 0.2,
								delay: 0.3,
							},
						}}
						whileHover={variants}
						className='-left-140 relative'
						src='/images/box-2.png'
						alt=''
					/>
				</motion.div>
			)}
		</motion.div>
	);
}
