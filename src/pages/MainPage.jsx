import { Header } from '../components/Header';
import { useAppContext } from '../components/Context';
import {
	HeroSection,
	AvailableIn,
	TextSection,
	StarsSection,
	IngredientsNumber,
	ScrollSection,
} from '../components/MainPage';
import { Footer } from '../components/Footer';

export default function MainPage() {
	const { cart, setCart, openCart, setOpenCart, setOpenMenu } = useAppContext();
	return (
		<div className='bg-primary min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden'>
			<Header cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} setOpenMenu={setOpenMenu} />
			<HeroSection />
			<AvailableIn />
			<TextSection />
			<StarsSection />
			<IngredientsNumber />
			<ScrollSection />
			<Footer />
		</div>
	);
}
