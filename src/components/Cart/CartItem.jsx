import { useState, useMemo, useEffect } from 'react';

export function CartItem({ item, index, cart, setCart }) {
	const [value, setValue] = useState(item.quantity);

	useEffect(() => {
		setValue(item.quantity);
	}, [item.quantity]);

	//item price
	const price = item.product.price.find((el) => el.quantity === item.bagSize).price;
	const onChange = (value) => {
		const newCart = [...cart];
		newCart[index].quantity = +value;
		setCart(newCart);
	};

	//remove item from cart
	const removeItem = () => {
		const newCart = [...cart];
		newCart.splice(index, 1);
		setCart(newCart);
	};

	return (
		<div className='flex my-3 z-30'>
			<img className='w-16 h-16 object-cover image-position' src={`/images/${item.product.images[2]}`} alt='' />
			<div className='flex flex-col mx-4 grow'>
				<h4 className='uppercase text-sm font-bold '>{item.product.name}</h4>
				<div className='text-xs leading-4'>$ {price}.00 USD</div>
				<div className='uppercase text-xs leading-5 text-light'>
					{item.product.name}: {item.bagSize} bags
				</div>
				<div onClick={removeItem} className='underline uppercase mt-2 cursor-pointer'>
					remove
				</div>
			</div>
			<input
				className='w-12 h-8 bg-[#d5cdc4] pl-2'
				type='number'
				min='0'
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	);
}
