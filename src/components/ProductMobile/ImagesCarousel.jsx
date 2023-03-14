import { useEffect } from 'react';
import { useAppContext } from '../Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

export function ImagesCarousel() {
	const { product } = useAppContext();
	console.log(product);

	return (
		<Swiper
			modules={[Pagination]}
			className='mySwiper'
			pagination={{
				clickable: true,
			}}
		>
			{product.images.map((image, i) => {
				return (
					<SwiperSlide key={i}>
						<img className='image-position-higher' src={`/images/${image}`} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
