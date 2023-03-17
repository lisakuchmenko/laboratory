import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../Context';
import { CloseButton } from '../Buttons';
import { motion } from 'framer-motion';

export function Menu() {
	const { productData, setOpenMenu } = useAppContext();
	const navigate = useNavigate();

	const redirectToProductPage = (page) => {
		navigate(`/product/${page}`);
		setOpenMenu(false);
	};

	const redirectToMainPage = () => {
		navigate(`/`);
		setOpenMenu(false);
	};

	return (
		<motion.div
			key='B'
			initial={{ y: '-80%' }}
			animate={{ y: 0 }}
			exit={{ y: '-100%' }}
			transition={{ duration: 1 }}
			className='h-full w-full min-w-screen min-h-screen fixed top-0 left-0 bg-light z-20 text-primary'
		>
			<div className='max-w-90 sm:max-w-262.5 mx-auto flex flex-col mt-12'>
				<div className='flex justify-between items-center'>
					<div onClick={redirectToMainPage} className='tracking-widest text-s cursor-pointer text-primary'>
						TALA
					</div>
					<div className='text-primary cursor-pointer'>
						<CloseButton />
					</div>
				</div>
				<h1 className='mt-6 text-primary text-7.5xl sm:text-11xl font-bold -ml-1.5 sm:-ml-3.5'>MENU</h1>
				<div className='flex flex-col sm:flex-row mt-6 sm:mt-10'>
					<div className='pt-0 sm:pt-36 mr-0 sm:mr-64 text-xl'>
						{productData.map((el) => {
							return (
								<div
									onClick={() => redirectToProductPage(el.name)}
									className='mb-2 last:mb-0 text-primary capitalize cursor-pointer'
									key={el.name}
								>
									{el.name}
								</div>
							);
						})}
					</div>
					<div className='mt-36 text-s sm:text-xl cursor-pointer'>
						<div className='mb-2'>About</div>
						<div className='mb-2'>FAQs</div>
						<div>Contact</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
