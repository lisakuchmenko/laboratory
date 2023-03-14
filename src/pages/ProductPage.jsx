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
import { ProductSectionMobile } from '../components/ProductMobile';

export default function ProductPage() {
	const { product, setProduct, cart, setCart, openCart, setOpenCart, openMenu, setOpenMenu } = useAppContext();
	const isMobile = window.innerWidth < 640;
	return (
		<div className='bg-primary min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden'>
			{openMenu && <Menu setOpenMenu={setOpenMenu} />}
			<Header cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} setOpenMenu={setOpenMenu} />
			{isMobile ? (
				<ProductSectionMobile />
			) : (
				<ProductSection product={product} setProduct={setProduct} setCart={setCart} setOpenCart={setOpenCart} />
			)}
			<HorizontalScrollText />
			<Ingredients />
			<TasteSection />
			<ComparingSection />
			<NutritionFacts />
			<SnackBetter />
			<Footer />
		</div>
	);
}
