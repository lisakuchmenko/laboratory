import { motion } from "framer-motion";

export function Hero() {

	let firstTitleWorld = "tutti"
	let secondTitleWord= "bites"

	return (
		<div className='w-full text-text flex items-center gap-[268px]'>
			<div 
				className='xl:w-[874px]'
				>
				<h1 className='relative text-7.5xl flex text-center sm:text-left sm:text-8.25xl/[100px] tracking-[0.2px] font-bold h-full uppercase w-[400px]'>
					{
						firstTitleWorld.split("").map((letter, index)=>
							<motion.div
								key={index}
								initial={{opacity:0, y: 75}}
								animate={{
									opacity:1,
									y: 0
								}}
								transition={{duration:0.35, delay:(0.03*(index+1))}}
								>
									{letter}
							</motion.div>
						)
					}
					<div className='absolute top-[87px] flex left-[203px]'>
						{
							secondTitleWord.split("").map((letter,index)=>
								<motion.div
									key={index}
									initial={{opacity:0, y: 75}}
									animate={{ opacity: 1,y: 0}}
									transition={{duration:0.5, delay:(0.03*(index+1))}}
									>
										{letter}
								</motion.div>
							)
						}
					</div>
				</h1>
				<div className='flex flex-col sm:flex-row justify-around mt-[147px]'>
					<div className="text-accent flex flex-col xl:text-xl 3xl:text-[33px] leading-[50px]  text-right 3xl:w-[852px]">
						<motion.p
							initial={{opacity:0, y: 75}}
							animate={{ opacity: 1,y: 0}}
							transition={{duration:0.5, delay:0.65}}
						>
							<span className="text-[#FFFFFF]">A revolutionary fruity delight</span> –crafted
						</motion.p> 
						<motion.p
							initial={{opacity:0, y: 75}}
							animate={{ opacity: 1,y: 0}}
							transition={{duration:0.5, delay:0.75}}
						>
							solely from the essence of nature.
						</motion.p>
					</div>
				</div>
			</div>
			<motion.a 
				initial={{opacity: 0, y:50}}
				animate={{opacity: 1 ,y: 0 ,}}
				transition={{duration:0.4, delay: 0.75}}
				href="/#snaks">
				<button className="bg-[#FFFFFF08] rounded-[50%] uppercase font-bold text-s leading-5 tracking-[0.2px] w-[250px] h-[250px] text-text">
					all Our Snacks
				</button>
			</motion.a>
		</div>
	);
}