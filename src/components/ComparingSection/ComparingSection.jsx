export function ComparingSection() {
	return (
		<div className='w-full h-164 flex mx-auto'>
			<div className='h-full grow bg-text font-bold py-28 px-16'>
				<div className='flex flex-col h-full max-w-[525px] justify-between'>
					<h3 className='text-primary font-bold text-8xl'>TALA</h3>
					<div className='flex justify-between h-44 items-center'>
						<div className=''>
							<p className='text-7xl'>
								6<span className='italic'>g</span>
							</p>
							<p className='text-2xl font-normal'>Sugars</p>
						</div>
						<div className='h-full w-px bg-grey'></div>
						<div>
							<p className='text-7xl'>40</p>
							<p className='text-2xl font-normal'>Calories</p>
						</div>
					</div>
				</div>
			</div>
			<div className='h-full grow font-bold text-text py-28 px-16'>
				<div className='flex flex-col h-full max-w-[525px] justify-between'>
					<h3 className='text-text text-8xl'>THEM</h3>
					<div className='flex justify-between h-44 items-center'>
						<div className=''>
							<p className='text-7xl'>
								13<span className='italic'>g</span>
							</p>
							<p className='text-2xl font-normal'>Sugars</p>
						</div>
						<div className='h-full w-px bg-text'></div>
						<div>
							<p className='text-7xl'>90</p>
							<p className='text-2xl font-normal'>Calories</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
