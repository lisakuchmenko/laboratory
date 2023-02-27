import { Header } from './components/Header';
import { ProductPage } from './components/Product';
import { HorizontalScrollText } from './components/HorizontalScrollText';
import { Ingredients } from './components/Ingredients';
import { TasteSection } from './components/TasteSection';
import { ComparingSection } from './components/ComparingSection';
import { NutritionFacts } from './components/NutritionFacts';
import { SnackBetter } from './components/SnackBetter';
import { useState } from 'react';
import { productData } from './data';

function App() {
	const [product, setProduct] = useState(productData[0]);
	const [cart, setCart] = useState(0);

	return (
		<div className='bg-primary max-w-screen pt-8 font-sportingGrotesque'>
			<Header cart={cart} />
			<ProductPage product={product} setProduct={setProduct} setCart={setCart} />
			<HorizontalScrollText />
			<Ingredients product={product.name} />
			<TasteSection />
			<ComparingSection />
			<NutritionFacts />
			<SnackBetter />
		</div>
	);
}

export default App;
