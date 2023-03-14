import { useAppContext } from '../Context';
import { ProductSelectorMobile } from './ProductSelectorMobile';
import { ProductInfo } from '../Product/ProductInfo';
import { ProductPack } from '../Product/ProductPack';
import { ImagesCarousel } from './ImagesCarousel';

export function ProductSectionMobile() {
	const { product } = useAppContext();

	return (
		<div className='h-screen max-w-90 mx-auto'>
			<ProductSelectorMobile />
			<ProductInfo />
			{/* <img className='max-h-[420px] w-full object-cover image-position-higher' src='/images/mango0.jpeg' alt='' /> */}
			<ImagesCarousel />
			<ProductPack />
			<div className='mt-10 text-xs uppercase leading-4'>{product.description}</div>
		</div>
	);
}
