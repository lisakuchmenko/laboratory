export function ProductInfo({ product, quantity }) {
	return (
		<>
			<div className='mb-10'>$ {product.price[quantity].price}.00 USD</div>
			<p className='max-w-75 text-xxs uppercase'>{product.description}</p>
		</>
	);
}
