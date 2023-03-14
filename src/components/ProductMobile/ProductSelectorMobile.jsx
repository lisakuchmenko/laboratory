import { useAppContext } from '../Context';
import { useRef } from 'react';

export function ProductSelectorMobile() {
	const { product, setProduct, productData } = useAppContext();
	const triangleRef = useRef(null);

	const openMenu = () => {
		if (triangleRef.current.classList.contains('toggle-up')) {
			triangleRef.current.classList.remove('toggle-up');
			triangleRef.current.classList.add('toggle-down');
		} else {
			triangleRef.current.classList.remove('toggle-down');
			triangleRef.current.classList.add('toggle-up');
		}
	};

	return (
		<div className='mt-20 mb-6'>
			<div className='flex justify-between items-center' onClick={openMenu}>
				<h1 className='text-4.5xl uppercase font-bold'>{product.name}</h1>
				<div ref={triangleRef} className='triangle toggle-down'></div>
			</div>
			<div className='bg-primary'></div>
		</div>
	);
}
