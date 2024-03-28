import { classNames } from '../../utils';
import { useAppContext } from '../Context';

export function ProductPack() {
	const { product, quantity, setQuantity } = useAppContext();
	return (
		<div className='flex gap-12.5 mt-[209px] uppercase text-[15px] tracking-[0.3px] leading-1.5 font-bold'>
			{product.price.map((el, i) => {
				return (
					<div
						onClick={() => setQuantity(i)}
						className={classNames('cursor-pointer', quantity === i ? 'text-text' : 'text-lightGrey')}
						key={el.quantity}
					>
						{el.quantity} packs
					</div>
				);
			})}
		</div>
	);
}
