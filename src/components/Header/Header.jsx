import { useState, useEffect, useMemo } from 'react';
import { Cart } from '../Cart';
import { Menu } from '../Menu';
import { useAppContext } from '../Context';
import { useLocation } from 'react-router-dom';
import { BurgerButton } from '../Buttons';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
	const { pathname } = useLocation();
	const [color, setColor] = useState(pathname === '/' || window.innerWidth < 640);
	const { openMenu, setOpenMenu, cart, openCart, setOpenCart } = useAppContext();

	const changeColor = () => {
		window.scrollY > 500 ? setColor(true) : setColor(false);
	};

	useEffect(() => {
		if (pathname !== '/' && window.innerWidth > 640) {
			window.addEventListener('scroll', changeColor);
			return () => window.removeEventListener('scroll', changeColor);
		}
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const sumOfItems = useMemo(() => {
		return cart.reduce((acc, el) => {
			return acc + el.quantity;
		}, 0);
	}, [cart]);

	return (
		<AnimatePresence>
			{openMenu ? (
				<Menu />
			) : (
				<motion.header
					key='A'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className='fixed w-screen sm:w-full z-10 top-12 text-s'
				>
					<div className='max-w-90 sm:max-w-262.5 mx-auto flex justify-between items-center'>
						<h2
							onClick={scrollToTop}
							className={`tracking-widest cursor-pointer ${color ? 'text-text' : 'text-primary'}`}
						>
							TALA
						</h2>
						<div className='flex w-25 justify-between relative'>
							<div onClick={() => setOpenCart(true)} className='flex relative cursor-pointer'>
								<div className='mr-2'>CART</div>
								<span className='inline-block w-4'>{sumOfItems}</span>
								{openCart && <Cart />}
							</div>
							<div className='cursor-pointer' onClick={() => setOpenMenu(true)}>
								<BurgerButton />
							</div>
						</div>
					</div>
				</motion.header>
			)}
		</AnimatePresence>
	);
}
