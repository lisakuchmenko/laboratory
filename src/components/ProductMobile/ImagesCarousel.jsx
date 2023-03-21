import { useEffect, useState } from 'react';
import { useAppContext } from '../Context';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';
import { useImagePreloader } from '../../hooks';

import 'swiper/css';
import 'swiper/css/pagination';

export function ImagesCarousel() {
	const { product } = useAppContext();
	const [swiper, setSwiper] = useState(null);

	// const { imagesPreloaded } = useImagePreloader(product.images);

	useEffect(() => {
		if (swiper) {
			swiper.slideTo(0);
		}
	}, [swiper, product]);

	// if (!imagesPreloaded) {
	// 	return null;
	// }

	return (
		<Swiper
			onSwiper={setSwiper}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className='mySwiper'
		>
			{product.images.map((image, i) => {
				return (
					<SwiperSlide key={i}>
						<img className='image-position-higher' src={`/images/${image[0]}`} key={image[0]} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
