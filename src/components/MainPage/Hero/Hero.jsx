import { HeroImage } from './HeroImage';
import { HeroText } from './HeroText';

export function Hero() {
	return (
		<div className='h-auto w-full mt-10 text-light'>
			<div className='max-w-262.5 mx-auto my-20'>
				<h1 className='text-7.5xl text-center sm:text-9xl font-bold h-full '>
					TALA<span className='inline-block text-4xl sm:text-5xl align-top ml-1 mt-4'>Ⓡ</span>
				</h1>
				<div className='flex flex-col sm:flex-row justify-around mt-10'>
					<p className='text-3xl w-80 ml-10'>
						<span className='inline-block ml-30'>An entirely</span> new fruit snack — made of fruit.
					</p>
					<div className='text-xxs'>
						<p>ONE INGREDIENT.</p>
						<p>ONE INCREDIBLE CRUNCH.</p>
					</div>
				</div>
			</div>
			<HeroImage />
			<HeroText />
		</div>
	);
}
