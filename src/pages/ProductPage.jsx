import { Header } from '../components/Header';
import { ProductSection } from '../components/Product';
import { HorizontalScrollText } from '../components/HorizontalScrollText';
import { Ingredients } from '../components/Ingredients';
import { TasteSection } from '../components/TasteSection';
import { ComparingSection } from '../components/ComparingSection';
import { NutritionFacts } from '../components/NutritionFacts';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { useAppContext } from '../components/Context';
import { ProductSectionMobile } from '../components/ProductMobile';
import { PageBlur } from '../components/PageBlur';

export default function ProductPage() {
	const { openMenu } = useAppContext();
	const isMobile = window.innerWidth < 640;
	return (
		<div className='bg-[#1D1B20] min-h-screen max-w-screen font-sportingGrotesque text-text overflow-x-hidden'>
			{openMenu && <Menu />}
			<Header />
			<PageBlur>
				{isMobile ? <ProductSectionMobile /> : <ProductSection />}
				<HorizontalScrollText />
				<Ingredients />
				<TasteSection />
				<ComparingSection />
				<NutritionFacts />
				<Footer /> 
			</PageBlur>
		</div>
	);
}
