export function ProductInfo({ product, quantity }) {
	return (
		<>
			<div className='mb-6 text-xl font-bold'>$ {product.price[quantity].price}.00 USD</div>
			<p className='max-w-75 text-xxs uppercase'>{product.description}</p>
		</>
	);
}
