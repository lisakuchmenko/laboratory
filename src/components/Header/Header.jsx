import { useState, useEffect } from 'react';
import { List } from 'react-bootstrap-icons';

export function Header({ cart }) {
	const [color, setColor] = useState(false);

	const changeColor = () => {
		window.scrollY > 500 ? setColor(true) : setColor(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeColor);
		return () => window.removeEventListener('scroll', changeColor);
	}, []);

	return (
		<header className='fixed w-full z-10 top-12 text-text text-xxs'>
			<div className='max-w-[1050px] mx-auto flex justify-between items-center'>
				<h2 className={`ml-5 tracking-widest ${color ? 'text-text' : 'text-primary'}`}>TALA</h2>
				<div className='flex w-[100px] justify-between'>
					<div className='flex'>
						<div className='mr-2'>CART</div>
						<span>{cart}</span>
					</div>
					<List />
				</div>
			</div>
		</header>
	);
}
