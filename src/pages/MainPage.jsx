import { Header } from '../components/Header';
import {
	HeroSection,
	IngredientsNumber,
	ScrollSection,
} from '../components/MainPage';
import { Footer } from '../components/Footer';
import { PageBlur } from '../components/PageBlur';
import AllSnaks from '../components/AllSnaks';
import Space from '../components/Space';

export default function MainPage() {
	return (
		<div className='bg-[#1D1B20] min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden scroll-smooth'>
			<Header />
			<PageBlur>
				<HeroSection />
				<AllSnaks/>
				<Space/>
				<IngredientsNumber />
				<ScrollSection />
				<Footer />
			</PageBlur>
		</div>
	);
}
