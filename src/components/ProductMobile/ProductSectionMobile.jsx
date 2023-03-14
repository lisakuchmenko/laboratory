import { useAppContext } from '../Context';
import { ProductSelectorMobile } from './ProductSelectorMobile';
import { ProductInfo } from '../Product/ProductInfo';
import { ProductPack } from '../Product/ProductPack';

export function ProductSectionMobile() {
	const { productData, quantity } = useAppContext();
	console.log(quantity);
	console.log(productData);
	return (
		<div className='h-screen max-w-90 mx-auto'>
			<ProductSelectorMobile />
			<ProductInfo />
			<img className='max-h-[420px] w-full object-cover image-position-higher' src='/images/mango0.jpeg' alt='' />
			<ProductPack />
		</div>
	);
}
