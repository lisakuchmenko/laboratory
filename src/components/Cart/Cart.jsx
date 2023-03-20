import { useRef, useEffect, useState, useCallback } from 'react';
import { CartItem } from './CartItem';
import { motion } from 'framer-motion';
import { useAppContext } from '../Context';

export function Cart() {
	const { cart, setCart, openCart, setOpenCart } = useAppContext();
	const [cartVisible, setCartVisible] = useState(false);
	const ref = useRef(null);
	const closeRef = useRef(null);
	const removeRef = useRef(null);

	useEffect(() => {
		if (openCart) {
			setCartVisible(true);
		}
	}, [openCart]);

	const handleClickOutside = useCallback(
		(event) => {
			if ((!ref.current.contains(event.target) || closeRef.current.contains(event.target)) && cartVisible) {
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
		<motion.div
			initial={{ y: '-80%' }}
			animate={{ y: 0 }}
			transition={{ duration: 1 }}
			ref={ref}
			className='bg-[#e2ddd7] text-primary absolute h-screen sm:h-auto -right-[48px] sm:right-0 -top-10 sm:top-8 z-20 w-screen sm:w-80 flex flex-col rounded-lg'
		>
			<div className='flex justify-between items-center text-sm font-bold pb-2 px-4 pt-4 border-b border-primary border-dotted'>
				<div className='uppercase h-full flex items-center pt-0.5'>Ready to check out?</div>
				<div ref={closeRef} className='text-xl icon-stroke cursor-pointer'>
					×
				</div>
			</div>
			<div className='px-4 py-1'>
				{cart.length ? (
					cart.map((el, i) => <CartItem key={i} index={i} item={el} cart={cart} setCart={setCart} ref={removeRef} />)
				) : (
					<div className='uppercase py-24 text-center font-bold text-xs'>sorry, there's nothing here yet</div>
				)}
			</div>
			{cart.length ? (
				<div className='border-t border-primary border-dotted px-4 py-9'>
					<p className='text-base text-light'>Ok, lets get started.</p>
					<input
						className='w-full placeholder:text-s h-5 pl-1 pt-1 mt-2 border border-dark'
						type='email'
						name='email'
						id='email'
						placeholder='Email...'
					/>
					<button className='w-full rounded-full bg-dark uppercase text-light text-sm mt-4 pt-5 pb-4'>next</button>
				</div>
			) : null}
		</motion.div>
	);
}
