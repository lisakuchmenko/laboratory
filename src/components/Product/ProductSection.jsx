import { useState, useEffect } from 'react';
import { ProductInfo } from './ProductInfo';
import { ProductSelector } from './ProductSelector';
import { productData } from '../../data';
import { ImagesSection } from './ImagesSection';
import { ProductPack } from './ProductPack';
import { motion } from 'framer-motion';
import {
	variantsHeader,
	variantsSelector,
	variantsButton,
	variantsDescription,
	variantsImagesSection,
} from './animations';
import { useAppContext } from '../Context';
import { AddToCartBtn } from '../Buttons';

export function ProductSection() {
	const { product, setProduct, setCart, setOpenCart, quantity, setQuantity, selectedImage, setSelectedImage } =
		useAppContext();

	useEffect(() => {
		setSelectedImage(0);
	}, [product?.id]);

	if (!product) return null;

	return (
		<div className='max-w-[1100px] mx-auto relative'>
			{!!product ? (
				<>
					<motion.h1
						key={product.id}
						variants={variantsHeader}
						initial='hidden'
						animate='show'
						className='h-36 text-primary font-shadow absolute top-10 right-0 text-10xl font-bold uppercase'
					>
						{product.name}
					</motion.h1>
					<div className='flex justify-start'>
						<img
							src={`/images/${product.images[selectedImage]}`}
							alt=''
							className='w-121.75 min-w-121.75 h-147.5 object-cover'
						/>
						<div className='w-full flex flex-col ml-8 mt-56 justify-between'>
							<motion.div key={product.id} variants={variantsSelector} initial='hidden' animate='show'>
								<ProductSelector data={productData} product={product} setProduct={setProduct} />
								<ProductPack />
							</motion.div>
							<div className='w-full grow flex items-end justify-between'>
								<div>
									<motion.div key={product.name} variants={variantsDescription} initial='hidden' animate='show'>
										<ProductInfo />
									</motion.div>
									<AddToCartBtn className='w-56 mt-12 pb-4 pt-5 text-xs uppercase font-medium border-2 border-text rounded-full' />
								</div>
								<motion.div key={product.id} variants={variantsImagesSection} initial='hidden' animate='show'>
									<ImagesSection />
								</motion.div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
