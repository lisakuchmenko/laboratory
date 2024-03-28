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

	const sections = [
		"about",
		"faqs",
		"contacts"
	];

	return (
		<motion.div
			key='B'
			initial={{ y: '-80%' }}
			animate={{ y: 0 }}
			exit={{ y: '-100%' }}
			transition={{ duration: 1 }}
			className='h-full w-full min-w-screen min-h-screen fixed top-0 left-0 bg-white z-20 text-primary'
		>
			<div className='w-[90vw] 3xl:w-[1600px] mx-auto flex flex-col mt-12'>
				<div className='flex justify-between items-center'>
					<p onClick={redirectToMainPage} className='uppercase tracking-[0.1px] font-semibold leading-6 text-xl cursor-pointer'>
						tutti bites
					</p>

					<div className='flex gap-[60px] items-center'>
						<div className='flex gap-5 font-semibold items-center text-xl leading-6'>
							<span className='uppercase'>cart</span>
							<span className='inline-block w-4'>0</span>
						</div>
						<CloseButton />
					</div>
				</div>
				<div className='flex gap-[311px] items-end'>
					<ul className='flex flex-col mt-[170.5px]'>
						{
							sections.map(section=>
								<li key={section}>
									<Link 
										className='uppercase font-bold text-[110px] leading-[182px] tracking-[0.2px] text-main_dark' 
										href={`/#${section}`}
										>
										{section}
									</Link>
								</li>)
						}
					</ul>
					<ul className='flex flex-col gap-5 mb-16'>
						{
							productData.map(page=>
								<li 
									key={page.name}
									onClick={()=>redirectToProductPage(page.name)} 
									className='font-bold text-main_dark tracking-[0.2px] text-xl leading-[33px] uppercase'>
									<Link href={page.name}>{page.name}</Link>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</motion.div>
	);
}