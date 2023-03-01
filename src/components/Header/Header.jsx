import { useState, useEffect, useMemo } from 'react';
import { List } from 'react-bootstrap-icons';
import { Cart } from '../Cart';

export function Header({ cart, openCart, setCart, setOpenCart }) {
	const [color, setColor] = useState(false);

	const changeColor = () => {
		window.scrollY > 500 ? setColor(true) : setColor(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeColor);
		return () => window.removeEventListener('scroll', changeColor);
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
		<header className='fixed w-full z-10 top-12 text-xxs'>
			<div className='max-w-262.5 mx-auto flex justify-between items-center'>
				<h2 onClick={scrollToTop} className={`tracking-widest cursor-pointer ${color ? 'text-text' : 'text-primary'}`}>
					TALA
				</h2>
				<div className='flex w-25 justify-between relative'>
					<div onClick={() => setOpenCart(true)} className='flex relative cursor-pointer'>
						<div className='mr-2'>CART</div>
						<span className='inline-block w-4'>{sumOfItems}</span>
						{openCart && <Cart cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} />}
					</div>
					<List />
				</div>
			</div>
		</header>
	);
}
