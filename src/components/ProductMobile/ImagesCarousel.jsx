import { useState } from 'react';
import { useAppContext } from '../Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

export function ImagesCarousel() {
	const { product, selectedImage, setSelectedImage } = useAppContext();
	console.log(product.images);

	return (
		<Swiper
			modules={[Pagination]}
			className='mySwiper'
			pagination={{
				clickable: true,
			}}
		>
			{product.images((image) => {
				<SwiperSlide>
					<img src={`/images/${image}`} />
				</SwiperSlide>;
			})}
		</Swiper>
	);
}
