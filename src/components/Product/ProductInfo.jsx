export function ProductInfo({ product }) {
	return (
		<>
			<div className='text-text mb-10'>$ {product.price}.00 USD</div>
			<p className='max-w-[300px] text-text text-xxs uppercase'>{product.description}</p>
		</>
	);
}
