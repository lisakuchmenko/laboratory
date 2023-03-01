import { useRef, useEffect, useState, useCallback } from 'react';
import { CartItem } from './CartItem';

export function Cart({ cart, setCart, openCart, setOpenCart }) {
	const [cartVisible, setCartVisible] = useState(false);
	const ref = useRef(null);
	const closeRef = useRef(null);

	useEffect(() => {
		console.log('openCart', openCart);
		if (openCart) {
			setCartVisible(true);
		}
	}, [openCart]);

	const handleClickOutside = useCallback(
		(event) => {
			if (ref.current && !ref.current.contains(event.target) && cartVisible) {
				setOpenCart(false);
				setCartVisible(false);
			}
			if (closeRef.current && closeRef.current.contains(event.target) && cartVisible) {
				setOpenCart(false);
				setCartVisible(false);
			}
		},
		[cartVisible]
	);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<div ref={ref} className='bg-[#e2ddd7] text-primary absolute right-0 top-8 z-20 w-80 flex flex-col rounded-lg'>
			<div className='flex justify-between items-center text-sm font-bold pb-2 px-4 pt-4 border-b border-primary border-dotted'>
				<div className='uppercase h-full flex items-center pt-0.5'>Ready to check out?</div>
				<div ref={closeRef} className='text-xl icon-stroke cursor-pointer'>
					×
				</div>
			</div>
			<div className='px-4 py-1'>
				{cart.map((el, i) => (
					<CartItem key={i} index={i} item={el} cart={cart} setCart={setCart} />
				))}
			</div>
		</div>
	);
}
