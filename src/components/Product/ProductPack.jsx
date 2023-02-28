import { classNames } from '../../utils';

export function ProductPack({ product, quantity, setQuantity }) {
	return (
		<div className='flex mt-8 uppercase space-x-10 text-xxs'>
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
