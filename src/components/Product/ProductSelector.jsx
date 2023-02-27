const COLORS = [
	'after:bg-product-0',
	'after:bg-product-1',
	'after:bg-product-2',
	'after:bg-product-3',
	'after:bg-product-4',
];

export function ProductSelector({ data, product, setProduct }) {
	return (
		<div className='flex items-center gap-x-12  z-10'>
			{data.map((el, i) => {
				return (
					<div
						key={el.name}
						className={`text-text text-xxs uppercase cursor-pointer relative ${
							product.name === el.name
								? `after:absolute after:content-[''] after:top-6 after:left-0 after:w-7 after:h-0.5 ` + COLORS[i]
								: ''
						}`}
						onClick={() => {
							setProduct(el);
						}}
					>
						{el.name}
					</div>
				);
			})}
		</div>
	);
}
