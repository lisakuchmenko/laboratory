import { motion } from 'framer-motion';
import { useAppContext } from '../Context';

export function AddToCartBtn(props) {
	const { product, quantity, setCart, setOpenCart } = useAppContext();
	console.log(props);
	const variantsButton = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: { type: 'easeIn', duration: 0.5, delay: 0.7 },
		},
	};

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
	return (
		<motion.button
			key={product.id}
			variants={variantsButton}
			initial='hidden'
			animate='show'
			onClick={addToCart}
			{...props}
		>
			Add to cart
		</motion.button>
	);
}
