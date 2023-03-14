import { Link } from 'react-router-dom';

export function Footer() {
	const sections = ['mango', 'banana', 'pineapple'];
	const mobileView = window.innerWidth < 640;

	return (
		<div className='h-screen sm:h-auto max-w-90 sm:max-w-262.5 mx-auto pb-0 sm:pb-20 pt-40 sm:pt-0'>
			<div className='w-full h-28 flex flex-col sm:flex-row justify-between items-end'>
				<h2 className='text-7.5xl sm:text-8.5xl font-bold h-full'>
					TALA<span className='inline-block text-4xl align-top mt-4'>Ⓡ</span>
				</h2>
				<div className='relative w-full sm:w-fit'>
					<input
						type='email'
						name='email'
						id=''
						placeholder='Email address'
						className='bg-primary border-b border-grey w-full sm:w-96 pb-2 placeholder:text-text mt-8 sm:mt-0 placeholder:text-xl sm:placeholder:text-base'
					/>
					<span className='absolute right-0 bottom-2'>→</span>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row justify-between mt-56 sm:mt-20'>
				<div className='flex flex-col mr-0 sm:mr-44'>
					{sections.map((section) => (
						<Link
							to={`/product/${section}`}
							key={section}
							className='flex justify-between w-full sm:w-110 border-b border-lightGrey mt-10 sm:mt-8 first:mt-0'
						>
							<p className='text-xl sm:text-sm capitalize'>{section}</p>
							<div>→</div>
						</Link>
					))}
				</div>
				{!mobileView && (
					<div className='text-xxs w-96'>
						<div>ABOUT</div>
						<div>FAQS</div>
						<div>CONTACT</div>
					</div>
				)}
			</div>
		</div>
	);
}
