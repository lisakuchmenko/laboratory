import { Hero } from './Hero';
import HeroDescription from './HeroDescription';
import HeroImages from './HeroImages';

export function HeroSection() {
	return (
		<div className='w-[79vw] mx-auto 3xl:w-380 mt-[228px]'>
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
