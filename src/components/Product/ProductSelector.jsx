import { useAppContext } from '../Context';

const COLORS = [
	'after:bg-product-0',
	'after:bg-product-1',
	'after:bg-product-2',
	'after:bg-product-3',
	'after:bg-product-4',
];

export function ProductSelector() {
	const { productData, product, setProduct } = useAppContext();

	return (
		<div className='flex items-center gap-x-12.5 z-10'>
			{productData.map((el, i) => {
				return (
					<div
						key={el.name}
						className={`text-[15px] font-bold leading-[25px] h-8 flex gap-[2px] items-end uppercase cursor-pointer relative ${
							product.name === el.name
								? `text-text after:absolute after:content-[''] after:bottom-[-6px] after:left-0 after:w-[60px] after:h-0.5 ` +
								  COLORS[i]
								: 'text-lightGrey'
						}`}
						onClick={() => {
							setProduct(el);
						}}
					>
						{el.name}
						<span className='self-start font-normal text-s leading-5 tracking-[1px]'>0{i+1}</span>
					</div>
				);
			})}
		</div>
	);
}
