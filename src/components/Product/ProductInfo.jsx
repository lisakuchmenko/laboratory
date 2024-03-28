import { useAppContext } from '../Context';

export function ProductInfo() {
	const { product, quantity } = useAppContext();
	const mobileView = window.innerWidth < 640;

	return (
		<>
			<p className='text-[44px] font-bold leading-[73px] text-text'>
				$ {product.price[quantity].price}.00 USD
			</p>
			{!mobileView && <p className='text-[15px] leading-[23px] text-text my-[70px] uppercase'>{product.description}</p>}
		</>
	);
}
