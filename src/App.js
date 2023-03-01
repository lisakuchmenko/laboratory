import { Header } from './components/Header';
import { ProductPage } from './components/Product';
import { HorizontalScrollText } from './components/HorizontalScrollText';
import { Ingredients } from './components/Ingredients';
import { TasteSection } from './components/TasteSection';
import { ComparingSection } from './components/ComparingSection';
import { NutritionFacts } from './components/NutritionFacts';
import { SnackBetter } from './components/SnackBetter';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { useState, useEffect } from 'react';
import { productData } from './data';

function App() {
	const [product, setProduct] = useState(productData[0]);
	const [cart, setCart] = useState([]);
	const [openCart, setOpenCart] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className='bg-primary max-w-screen pt-8 font-sportingGrotesque text-text'>
			{openMenu && <Menu setOpenMenu={setOpenMenu} />}
			<Header cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} setOpenMenu={setOpenMenu} />
			<ProductPage product={product} setProduct={setProduct} setCart={setCart} setOpenCart={setOpenCart} />
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

export default App;
