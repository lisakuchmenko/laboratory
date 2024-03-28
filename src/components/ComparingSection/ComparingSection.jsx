import { motion } from 'framer-motion';

export function ComparingSection() {
	return (
		<div className='w-full flex flex-col sm:flex-row mx-auto'>
			<div className='h-full w-1/2 font-bold py-20 sm:py-28  sm:px-16 3xl:px-[110px] 3xl:pt-[70px] 3xl:pb-[150px] bg-[#f2e6d8]'>
				<div className='flex flex-col gap-[163px] mx-auto '>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: {
								type: 'easeOut',
								duration: 1,
								delay: 0.3,
							},
						}}
						className='h-[367px] relative text-[6.25vw] xl:text-[100px] 3xl:text-[120px] leading-[198px] text-main_dark tracking-[0.3px] uppercase'
					>
						<p className='text-left'>tutti</p>
						<p className='text-right absolute top-[139px] right-0'>bites</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								type: 'easeOut',
								duration: 1,
								delay: 0.3,
							},
						}}
						className='flex h-[330px] justify-between h-44 items-center  text-[6.25vw] xl:text-[80px] 3xl:text-[120px] leading-[198px] text-main_dark tracking-[0.3px] text-main-'
					>
						<div className=''>
							<p>
								0<span>g</span>
							</p>
							<p className='text-3xl 3xl:text-4.5xl uppercase font-normal'>Sugars</p>
						</div>
						<div className='h-full w-px bg-grey'></div>
						<div>
							<p>95</p>
							<p className='text-3xl 3xl:text-4.5xl uppercase font-normal'>Calories</p>
						</div>
					</motion.div>
				</div>
			</div>
			<div className='h-full w-1/2 font-bold py-20 sm:py-28  sm:px-16 3xl:px-[110px] 3xl:pt-[70px] 3xl:pb-[150px] bg-main_dark text-[#f2e6d8]'>
				<div className='flex flex-col gap-[163px] mx-auto '>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: {
								type: 'easeOut',
								duration: 1,
								delay: 0.3,
							},
						}}
						className='h-[367px] relative text-[6.25vw] xl:text-[100px] 3xl:text-[120px] leading-[198px] tracking-[0.3px] uppercase'
					>
						others
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								type: 'easeOut',
								duration: 1,
								delay: 0.3,
							},
						}}
						className='flex h-[330px] justify-between h-44 items-center text-[6.25vw] xl:text-[80px] 3xl:text-[120px] leading-[198px] tracking-[0.3px]'
					>
						<div className=''>
							<p>
								15<span>g</span>
							</p>
							<p className='text-3xl 3xl:text-4.5xl uppercase font-normal'>Sugars</p>
						</div>
						<div className='h-full w-px bg-grey'></div>
						<div>
							<p>130</p>
							<p className='text-3xl 3xl:text-4.5xl uppercase font-normal'>Calories</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
