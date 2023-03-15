import { motion } from 'framer-motion';

export function ComparingSection() {
	return (
		<div className='w-full h-full sm:h-164 flex flex-col sm:flex-row mx-auto'>
			<div className='h-full grow bg-text font-bold py-20 sm:py-28 px-10 sm:px-16 text-primary'>
				<div className='flex flex-col h-full max-w-90 sm:max-w-[525px]  justify-between mx-auto'>
					<motion.h3
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: {
								type: 'easeOut',
								duration: 1,
								delay: 0.3,
							},
						}}
						className='text-7xl sm:text-8xl'
					>
						TALA
					</motion.h3>
					<div className='flex justify-between h-44 items-center'>
						<div className=''>
							<p className='text-5xl sm:text-7xl'>
								15<span className='italic'>g</span>
							</p>
							<p className='text-2xl font-normal'>Sugars</p>
						</div>
						<div className='h-full w-px bg-grey'></div>
						<div>
							<p className='text-5xl sm:text-7xl'>90</p>
							<p className='text-2xl font-normal'>Calories</p>
						</div>
					</div>
				</div>
			</div>
			<div className='h-full grow font-bold py-20 sm:py-28 px-10 sm:px-16'>
				<div className='flex flex-col h-full max-w-90 sm:max-w-[525px] justify-between mx-auto'>
					<motion.h3
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: {
								type: 'easeOut',
								duration: 1,
								delay: 0.3,
							},
						}}
						className='text-7xl sm:text-8xl'
					>
						THEM
					</motion.h3>
					<div className='flex justify-between h-44 items-center text-text'>
						<div>
							<p className='text-5xl sm:text-7xl'>
								15<span className='italic'>g</span>
							</p>
							<p className='text-2xl font-normal'>Sugars</p>
						</div>
						<div className='h-full w-px bg-text'></div>
						<div>
							<p className='text-5xl sm:text-7xl'>130</p>
							<p className='text-2xl font-normal'>Calories</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
