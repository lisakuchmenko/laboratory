export function ProductInfo({ product }) {
	return (
		<>
			<div className='mb-10'>$ {product.price}.00 USD</div>
			<p className='max-w-75 text-xxs uppercase'>{product.description}</p>
		</>
	);
}
