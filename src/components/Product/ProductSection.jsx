import { useState, useEffect} from 'react';
import { ProductInfo } from './ProductInfo';
import { ProductSelector } from './ProductSelector';
import { ProductPack } from './ProductPack';
import { motion } from 'framer-motion';
import {
	variantsSelector,
	variantsDescription,
} from './animations';
import { useAppContext } from '../Context';
import { AddToCartBtn } from '../Buttons';
import { useProgressiveImg } from '../../hooks';

export function ProductSection() {

	let priductImagesArr = [
		{src:"/images/hero/hero_first_image.png"},
		{src:"/images/hero/hero_second_image.png"},
		{src:"/images/hero/hero_third_image.png"},
		{src:"/images/hero/hero_first_image.png"},
		{src:"/images/hero/hero_second_image.png"},
	]

	const { product, selectedImage, setSelectedImage } = useAppContext();

	let [currentImageId, setCurrentImageId] = useState(1);

	useEffect(() => {
		setSelectedImage(0);
	}, [product?.id]);

	const [src, { blur }] = useProgressiveImg(
		`/images/${product?.images[selectedImage][0]}`,
		`/images/${product?.images[selectedImage][1]}`
	);

	if (!product) return null;

	const buckerIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>;
	


	const onClickHandler = (id) => {
		setCurrentImageId(+id);
	}

	return (
		<section className='w-11/12 3xl:w-380 mx-auto relative mt-[153px] flex justify-between'>
			<div className='w-[46vw] 3xl:w-[874px]'>
				<motion.img 
					key={priductImagesArr[currentImageId].src} 
					initial={{opacity:0}}
					animate={{opacity:1}}
					exit={{opacity:0}}
					transition={{duration:0.75}}
					className='w-full h-[46vw] 3xl:h-[732px] object-cover' 
					src={priductImagesArr[currentImageId].src}
					alt="product_image" 
				/>
				<div className='mt-1.8 flex justify-between 3xl:h-[130px]'>
					{
						priductImagesArr.map(({src},index)=>
							<img 
								onClick={(e)=>onClickHandler(e.target.id)}
								key={index}
								id={index}
								className='w-1/6 3xl:w-[164px] object-cover' 
								src={src}
								alt="product_image" />							
						)
					}
				</div>
			</div>
			<div className='grow-0 relative 3xl:w-[565px]'>
				<motion.h1 key={product.id} variants={variantsSelector} initial='hidden' animate='show' className='font-bold text-8.25xl leading-[165.2px] tracking-[0.2px] uppercase relative left-0 w-[40vw] text-right ml-[-250px]'>{product.name}</motion.h1>
				<div className='ml-[79px] flex flex-col'>
					<motion.div key={product.id} variants={variantsSelector} initial='hidden' animate='show'>
						<ProductSelector />
						<ProductPack />
					</motion.div>
					<div className='flex flex-col mt-[30px] w-[430px]'>
						<motion.div key={product.name} variants={variantsDescription} initial='hidden' animate='show'>
							<ProductInfo />
						</motion.div>
						<AddToCartBtn icon={buckerIcon} className='flex gap-5 items-center justify-center w-[288px] py-6 text-s uppercase font-bold border border-white rounded-full' />
					</div>
				</div>
			</div>
		</section>
	);
}