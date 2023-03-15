import { useAppContext } from '../Context';
import { ProductSelectorMobile } from './ProductSelectorMobile';
import { ProductInfo } from '../Product/ProductInfo';
import { ProductPack } from '../Product/ProductPack';
import { ImagesCarousel } from './ImagesCarousel';
import { useEffect } from 'react';
import { AddToCartBtn } from '../Buttons/AddToCartBtn';

export function ProductSectionMobile() {
	const { product, quantity, setCart, setOpenCart, setSelectedImage } = useAppContext();

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

	if (!product) return null;

	return (
		<div className='h-full max-w-90 mx-auto'>
			<ProductSelectorMobile />
			<ProductInfo />
			{/* <img className='max-h-[420px] w-full object-cover image-position-higher' src='/images/mango0.jpeg' alt='' /> */}
			<ImagesCarousel />
			<ProductPack />
			<div className='mt-10 text-xs uppercase leading-4'>{product.description}</div>
			<button
				onClick={addToCart}
				className='w-full mt-5 pb-4 pt-5 text-xs uppercase font-medium border-2 border-text rounded-full'
			>
				Add to cart
			</button>
		</div>
	);
}
