import { useAppContext } from '../Context';
import { ProductSelectorMobile } from './ProductSelectorMobile';
import { ProductInfo } from '../Product/ProductInfo';
import { ProductPack } from '../Product/ProductPack';
import { ImagesCarousel } from './ImagesCarousel';
import { useEffect, useState } from 'react';
import { AddToCartBtn } from '../Buttons/AddToCartBtn';
import { preloadImage } from '../../utils';

export function ProductSectionMobile() {
	const { product } = useAppContext();

	if (!product) return null;

	return (
		<div className='h-full max-w-90 mx-auto'>
			<ProductSelectorMobile />
			<ProductInfo />
			<ImagesCarousel />
			<ProductPack />
			<div className='mt-10 text-xs uppercase leading-4'>{product.description}</div>
			<AddToCartBtn className='w-full mt-5 pb-4 pt-5 text-xs uppercase font-medium border-2 border-text rounded-full' />
		</div>
	);
}
