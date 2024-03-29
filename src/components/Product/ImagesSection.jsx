import { useState, useEffect } from 'react';
import { classNames } from '../../utils';
import { useAppContext } from '../Context';

const COLORS = [
	'outline-product-0',
	'outline-product-1',
	'outline-product-2',
	'outline-product-3',
	'outline-product-4',
];

export function ImagesSection() {
	const { product, selectedImage, setSelectedImage } = useAppContext();

	return (
		<div>
			{product.images.map((el, i) => {
				return (
					<div
						key={i}
						className={classNames(
							'w-[55px] h-[35px] mb-8 last-of-type:mb-0 rounded-xs cursor-pointer',
							selectedImage === i ? `outline outline-2 outline-offset-2 ${COLORS[product?.id - 1]}` : ''
						)}
						onClick={() => setSelectedImage(i)}
					>
						<img
							src={`/images/${el[1]}`}
							alt=''
							className='w-full h-full object-cover image-position-higher rounded-xs'
						/>
					</div>
				);
			})}
		</div>
	);
}
