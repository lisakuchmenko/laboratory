import { useState } from 'react';
import { useAppContext } from '../Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

export function ImagesCarousel() {
	const { product } = useAppContext();
	console.log(product.images);

	return (
		<Swiper
			modules={[Pagination]}
			className='mySwiper'
			pagination={{
				clickable: true,
			}}
		>
			{product.images.map((image) => {
				return (
					<SwiperSlide>
						<img className='image-position-higher' src={`/images/${image}`} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
