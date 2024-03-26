import { Hero } from './Hero';
import HeroDescription from './HeroDescription';
import HeroImages from './HeroImages';

export function HeroSection() {
	return (
		<div className='2xl:w-380 mt-[260px] mx-auto'>
			<Hero />
			<HeroImages/>
			<HeroDescription/>
		</div>
	);
}
{
/* <HeroImage />
<HeroText /> */
}
