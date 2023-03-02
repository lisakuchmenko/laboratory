import { Header } from '../components/Header';
import { useAppContext } from '../components/Context';
import { Hero } from '../components/MainPage';

export default function MainPage() {
	const { cart, setCart, openCart, setOpenCart, setOpenMenu } = useAppContext();
	return (
		<div className='bg-primary min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text'>
			<Header cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} setOpenMenu={setOpenMenu} />
			<Hero />
		</div>
	);
}
