export function Footer() {
	const sections = ['Mango', 'Banana', 'Pineapple', 'Pitahaya', 'Variety', 'Sampler'];
	return (
		<div className='h-auto text-text max-w-[1050px] mx-auto pb-20'>
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
			<div className='flex justify-start mt-20'>
				<div className='flex flex-col'>
					{sections.map((section) => (
						<div className='flex justify-between w-110 border-b border-grey mt-8'>
							<p className='text-sm'>{section}</p>
							<div>→</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
