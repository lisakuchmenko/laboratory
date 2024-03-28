import { Hero } from './Hero';
import HeroDescription from './HeroDescription';
import HeroImages from './HeroImages';

export function HeroSection() {
	return (
		<section className='w-11/12 mx-auto 3xl:w-380 mt-[228px]'>
			<Hero />
			<HeroImages/>
			<HeroDescription/>
		</section>
	);
}

