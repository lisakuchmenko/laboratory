import { Header } from '../components/Header';
import {
	HeroSection,
	AvailableIn,
	TextSection,
	StarsSection,
	IngredientsNumber,
	ScrollSection,
	ParallaxComponent,
} from '../components/MainPage';
import { Footer } from '../components/Footer';
import { PageBlur } from '../components/PageBlur';
import AllSnaks from '../components/AllSnaks';
import Space from '../components/Space';

export default function MainPage() {
	return (
		<div className='bg-primary min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden scroll-smooth'>
			<Header />
			<PageBlur>
				<HeroSection />
				<AllSnaks/>
				<Space/>
				{/* <TextSection /> */}
				{/* <StarsSection /> */}
				{/* <IngredientsNumber /> */}
				{/* <ScrollSection /> */}
				{/* <ParallaxComponent /> */}
				{/* <Footer /> */}
			</PageBlur>
		</div>
	);
}
