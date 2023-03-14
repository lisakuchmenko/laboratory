import { useAppContext } from '../Context';

export function ProductInfo() {
	const { product, quantity } = useAppContext();
	const mobileView = window.innerWidth < 640;

	return (
		<>
			<div className='mb-2 sm:mb-6 text-xl font-bold'>$ {product.price[quantity].price}.00 USD</div>
			{!mobileView && <p className='max-w-75 text-xxs uppercase'>{product.description}</p>}
		</>
	);
}
