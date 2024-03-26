import { useState, useEffect, useMemo } from 'react';
import { Cart } from '../Cart';
import { Menu } from '../Menu';
import { useAppContext } from '../Context';
import { useLocation } from 'react-router-dom';
import { BurgerButton } from '../Buttons';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
	const { pathname } = useLocation();
	const [color, setColor] = useState(
		pathname === '/' || window.innerWidth < 640
	);
	const { openMenu, setOpenMenu, cart, openCart, setOpenCart } =
		useAppContext();

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
					<div className='w-90 sm:w-262.5 2xl:w-380 mx-auto flex justify-between items-center text-xl text-text'>
						<p
							onClick={scrollToTop}
							className={`tracking-wide cursor-pointer uppercase ${
								color ? 'text-text' : 'text-primary'
							}`}
						>
							tutti bites
						</p>
						<div className='flex w-25 gap-[60px] justify-between relative'>
							<div
								onClick={() => setOpenCart(true)}
								className='flex relative cursor-pointer'
							>
								<div className='mr-2 uppercase'>cart</div>
								<span className='inline-block w-4'>{sumOfItems}</span>
								<AnimatePresence
									initial={false}
									exitBeforeEnter={true}
									onExitComplete={() => null}
								>
									{openCart && <Cart />}
								</AnimatePresence>
							</div>
							<div className='cursor-pointer mt-[7.5px]' onClick={() => setOpenMenu(true)}>
								<BurgerButton />
							</div>
						</div>
					</div>
				</motion.header>
			)}
		</AnimatePresence>
	);
}
