import { useEffect, useState } from 'react';
import { useAppContext } from '../Context';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';
import { preloadImage } from '../../utils';

import 'swiper/css';
import 'swiper/css/pagination';

export function ImagesCarousel() {
	const { product } = useAppContext();
	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		if (swiper) {
			swiper.slideTo(0);
		}
	}, [swiper, product]);

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
						<img className='image-position-higher' src={`/images/${image}`} key={image} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
