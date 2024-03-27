import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Hero() {
	
	const mainHeroText = useRef(null);
	const isMainHeroTextInView = useInView(mainHeroText);

	const heroLink = useRef(null);
	const isHeroLinkInView = useInView(heroLink);

	return (
		<div className='w-full text-text flex items-center gap-[268px]'>
			<motion.div 
				initial={{opacity:0, x:-100}}
				animate={{
					opacity: isMainHeroTextInView ? 1 : 0,
					x: isMainHeroTextInView ? 0 : -50,
				}}
				transition={{duration:2}}
				ref={mainHeroText} 
				className='w-90 sm:w-262.5 2xl:w-[874px]'
				>
				<h1 className='relative text-7.5xl text-center sm:text-left sm:text-8.25xl/[100px] tracking-[0.2px] font-bold h-full uppercase w-[400px]'>
					tutti <span className='absolute top-[87px] left-[203px]'>bites</span>
				</h1>
				<div className='flex flex-col sm:flex-row justify-around mt-[147px]'>
					<p className="text-accent text-[33px] leading-[50px] text-right">
						<span className="text-[#FFFFFF]">A revolutionary fruity delight</span> – crafted solely from the essence of
						nature.
					</p>
				</div>
			</motion.div>
			<motion.a 
				initial={{opacity: 0,x:50}}
				animate={{
					opacity: isHeroLinkInView ? 1 : 0,
					x: isHeroLinkInView ? 0 : 50
				}}
				transition={{duration:1.5, delay: .5}}
				ref={heroLink} 
				href="/#snaks">
				<button className="bg-[#FFFFFF08] rounded-[50%] uppercase font-bold text-s leading-5 tracking-[0.2px] w-[250px] h-[250px] text-text">
					all Our Snacks
				</button>
			</motion.a>
		</div>
	);
}