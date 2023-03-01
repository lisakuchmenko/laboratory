import { XLg } from 'react-bootstrap-icons';

export function Menu({ setOpenMenu }) {
	return (
		<div className='h-full w-full min-w-screen min-h-screen fixed top-0 left-0 bg-light z-40 text-primary'>
			<div className='max-w-262.5 mx-auto flex flex-col  mt-10'>
				<div className='flex justify-between items-center'>
					<h2 className='tracking-widest text-sm cursor-pointer text-primary'>TALA</h2>
					<div className='text-primary cursor-pointer' onClick={() => setOpenMenu(false)}>
						<XLg />
					</div>
				</div>
				<h1 className='mt-6 text-primary text-11xl font-bold -ml-2'>MENU</h1>
				<div className='flex mt-10'>
					<div className='pt-36 mr-64 text-xl'>
						<div className='mb-2'>Mango</div>
						<div className='mb-2'>Banana</div>
						<div>Pineapple</div>
					</div>
					<div className='text-xl'>
						<div className='mb-2'>About</div>
						<div className='mb-2'>FAQs</div>
						<div>Contact</div>
					</div>
				</div>
			</div>
		</div>
	);
}
