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

export function ProductSection() {
	const { product, setProduct, setCart, setOpenCart, quantity, setQuantity } = useAppContext();
	const [selectedImage, setSelectedImage] = useState(0);

	useEffect(() => {
		setSelectedImage(0);
	}, [product?.id]);

	const addToCart = () => {
		setCart((prev) => {
			const productInCart = prev.find(
				(el) => el.product.name === product.name && el.bagSize === product.price[quantity].quantity
			);
			if (productInCart) {
				return prev.map((el) => {
					if (el.product.name === product.name && el.bagSize === product.price[quantity].quantity) {
						return { ...el, quantity: el.quantity + 1 };
					}
					return el;
				});
			}
			return [...prev, { product, quantity: 1, bagSize: product.price[quantity].quantity }];
		});

		setTimeout(() => {
			setOpenCart(true);
		}, 500);
	};

	//return null if product is undefined
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
									<motion.button
										key={product.id}
										variants={variantsButton}
										initial='hidden'
										animate='show'
										onClick={addToCart}
										className='w-56 mt-12 pb-4 pt-5 text-xs uppercase font-medium border-2 border-text rounded-full '
									>
										Add to cart
									</motion.button>
								</div>
								<motion.div key={product.id} variants={variantsImagesSection} initial='hidden' animate='show'>
									<ImagesSection selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
								</motion.div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
