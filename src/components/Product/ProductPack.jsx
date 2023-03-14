import { classNames } from '../../utils';
import { useAppContext } from '../Context';

export function ProductPack() {
	const { product, quantity, setQuantity } = useAppContext();
	return (
		<div className='flex mt-4 sm:mt-8 uppercase space-x-4 sm:space-x-10 text-s sm:text-xxs font-bold'>
			{product.price.map((el, i) => {
				return (
					<div
						onClick={() => setQuantity(i)}
						className={classNames('cursor-pointer', quantity === i ? 'text-text' : 'text-lightGrey')}
						key={el.quantity}
					>
						{el.quantity} bags
					</div>
				);
			})}
		</div>
	);
}
