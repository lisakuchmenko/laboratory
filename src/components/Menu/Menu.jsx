import { XLg } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../Context';

export function Menu({ setOpenMenu }) {
	const { productData } = useAppContext();
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
		<div className='h-full w-full min-w-screen min-h-screen fixed top-0 left-0 bg-light z-40 text-primary'>
			<div className='max-w-262.5 mx-auto flex flex-col  mt-10'>
				<div className='flex justify-between items-center'>
					<div onClick={redirectToMainPage} className='tracking-widest text-sm cursor-pointer text-primary'>
						TALA
					</div>
					<div className='text-primary cursor-pointer' onClick={() => setOpenMenu(false)}>
						<XLg />
					</div>
				</div>
				<h1 className='mt-6 text-primary text-11xl font-bold -ml-3.5'>MENU</h1>
				<div className='flex mt-10'>
					<div className='pt-36 mr-64 text-xl'>
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
					<div className='text-xl cursor-pointer'>
						<div className='mb-2'>About</div>
						<div className='mb-2'>FAQs</div>
						<div>Contact</div>
					</div>
				</div>
			</div>
		</div>
	);
}
