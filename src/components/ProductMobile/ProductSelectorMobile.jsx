import { useAppContext } from '../Context';
import { useRef, useState } from 'react';

export function ProductSelectorMobile() {
	const { product, setProduct, productData } = useAppContext();
	const triangleRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => {
		if (triangleRef.current.classList.contains('toggle-up')) {
			triangleRef.current.classList.remove('toggle-up');
			triangleRef.current.classList.add('toggle-down');
			setMenuOpen(false);
		} else {
			triangleRef.current.classList.remove('toggle-down');
			triangleRef.current.classList.add('toggle-up');
			setMenuOpen(true);
		}
	};

	return (
		<div className='mt-20 mb-4 relative'>
			<div className='flex justify-between items-center' onClick={openMenu}>
				<h1 className='text-4.5xl uppercase font-bold'>{product.name}</h1>
				<div ref={triangleRef} className='triangle toggle-down'></div>
			</div>
			<div className='bg-primary absolute z-10 w-full'>
				<div className='flex flex-col '>
					{menuOpen &&
						productData.map((el) => {
							return (
								<div
									key={el.id}
									className='flex justify-between items-center py-4 px-4 border-b border-lightGrey'
									onClick={() => setProduct(el)}
								>
									{el.name}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
