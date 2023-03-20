import { useAppContext } from '../Context';
import { useRef, useState } from 'react';
import { classNames } from '../../utils';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const COLORS = ['after:bg-product-0', 'after:bg-product-1', 'after:bg-product-2'];

export function ProductSelectorMobile() {
	const { product, setProduct, productData } = useAppContext();
	const triangleRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();

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
			{menuOpen && (
				<motion.div
					initial={{ height: 0 }}
					animate={{ height: '190px' }}
					transition={{ duration: 0.5, ease: 'linear' }}
					className='bg-primary absolute z-10 w-screen pb-10 -mx-2'
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, ease: 'linear' }}
						className='flex flex-col'
					>
						{productData.map((el, i) => {
							return (
								<div
									key={el.name}
									className={`text-sm uppercase cursor-pointer relative px-2 py-4 ${
										product.name === el.name
											? `text-text after:absolute after:content-[''] after:top-10 after:left-2 after:w-12 after:h-0.5 ` +
											  COLORS[i]
											: 'text-lightGrey'
									}`}
									onClick={() => {
										setProduct(el);
										navigate(`/product/${el.name}`);
										openMenu();
									}}
								>
									{el.name}
								</div>
							);
						})}
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}
