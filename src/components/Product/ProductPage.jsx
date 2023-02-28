import { useState, useEffect } from 'react';
import { ProductInfo } from './ProductInfo';
import { ProductSelector } from './ProductSelector';
import { productData } from '../../data';
import { ImagesSection } from './ImagesSection';
import { Cart } from '../Cart';
import { ProductPack } from './ProductPack';
import { motion } from 'framer-motion';
import {
	variantsHeader,
	variantsMainImage,
	variantsSelector,
	variantsButton,
	variantsDescription,
	variantsImagesSection,
} from './animations';

export function ProductPage({ product, setProduct, setCart }) {
	const [selectedImage, setSelectedImage] = useState(0);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		setSelectedImage(0);
	}, [product.id]);

	return (
		<div className='max-w-[1100px] mx-auto relative'>
			<motion.h1
				key={product.id}
				variants={variantsHeader}
				initial='hidden'
				animate='show'
				className='text-primary font-shadow absolute top-10 right-0 text-10xl font-bold uppercase'
			>
				{product.name}
			</motion.h1>
			<div className='flex justify-start'>
				<img src={`images/${product.images[selectedImage]}`} alt='' className='w-121.75 h-147.5' />
				<div className='w-full flex flex-col ml-8 mt-56 z-10 justify-between'>
					<motion.div key={product.id} variants={variantsSelector} initial='hidden' animate='show'>
						<ProductSelector data={productData} product={product} setProduct={setProduct} />
						<ProductPack product={product} quantity={quantity} setQuantity={setQuantity} />
					</motion.div>
					<div className='w-full grow flex items-end justify-between'>
						<div>
							<motion.div key={product.name} variants={variantsDescription} initial='hidden' animate='show'>
								<ProductInfo product={product} quantity={quantity} />
							</motion.div>
							<motion.button
								key={product.id}
								variants={variantsButton}
								initial='hidden'
								animate='show'
								onClick={() => setCart((prev) => prev + 1)}
								className='w-56 mt-12 pb-4 pt-5 text-xs uppercase font-medium border-2 border-text rounded-full '
							>
								Add to cart
							</motion.button>
						</div>
						<motion.div key={product.id} variants={variantsImagesSection} initial='hidden' animate='show'>
							<ImagesSection
								images={product.images}
								selectedImage={selectedImage}
								setSelectedImage={setSelectedImage}
								id={product.id}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
