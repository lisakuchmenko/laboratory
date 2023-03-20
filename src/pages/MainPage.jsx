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

export default function MainPage() {
	return (
		<div className='bg-primary min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden scroll-smooth'>
			<Header />
			<PageBlur>
				<HeroSection />
				<AvailableIn />
				<TextSection />
				<StarsSection />
				<IngredientsNumber />
				{/* <ScrollSection /> */}
				<ParallaxComponent />
				<Footer />
			</PageBlur>
		</div>
	);
}
