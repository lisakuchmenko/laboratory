export function Footer() {
	const sections = ['Mango', 'Banana', 'Pineapple'];
	return (
		<div className='h-auto max-w-262.5 mx-auto pb-20'>
			<div className='w-full h-28 flex justify-between items-end'>
				<h2 className='text-8.5xl font-bold h-full'>
					TALA<span className='inline-block text-4xl align-top mt-4'>Ⓡ</span>
				</h2>
				<div className='relative'>
					<input
						type='email'
						name='email'
						id=''
						placeholder='Email address'
						className='bg-primary border-b border-grey w-96 pb-2 placeholder:text-text '
					/>
					<span className='absolute right-0'>→</span>
				</div>
			</div>
			<div className='flex justify-between mt-20'>
				<div className='flex flex-col mr-44'>
					{sections.map((section) => (
						<div key={section} className='flex justify-between w-110 border-b border-lightGrey mt-8 first:mt-0'>
							<p className='text-sm'>{section}</p>
							<div>→</div>
						</div>
					))}
				</div>
				<div className='text-xxs w-96'>
					<div>ABOUT</div>
					<div>FAQS</div>
					<div>CONTACT</div>
				</div>
			</div>
		</div>
	);
}
