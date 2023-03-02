import { Header } from '../components/Header';
import { ProductSection } from '../components/Product';
import { HorizontalScrollText } from '../components/HorizontalScrollText';
import { Ingredients } from '../components/Ingredients';
import { TasteSection } from '../components/TasteSection';
import { ComparingSection } from '../components/ComparingSection';
import { NutritionFacts } from '../components/NutritionFacts';
import { SnackBetter } from '../components/SnackBetter';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { useAppContext } from '../components/Context';

export default function ProductPage() {
	const { product, setProduct, cart, setCart, openCart, setOpenCart, openMenu, setOpenMenu } = useAppContext();
	return (
		<div className='bg-primary max-w-screen pt-8 font-sportingGrotesque text-text'>
			{openMenu && <Menu setOpenMenu={setOpenMenu} />}
			<Header />
			<ProductSection product={product} setProduct={setProduct} setCart={setCart} setOpenCart={setOpenCart} />
			<HorizontalScrollText />
			<Ingredients product={product.name} />
			<TasteSection />
			<ComparingSection />
			<NutritionFacts />
			<SnackBetter />
			<Footer />
		</div>
	);
}
