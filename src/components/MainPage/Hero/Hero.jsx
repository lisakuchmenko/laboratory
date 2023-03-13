export function Hero() {
	return (
		<div className='h-auto w-full mt-10 xs:mt-10 text-light'>
			<div className='max-w-90 sm:max-w-262.5 mx-auto my-28'>
				<h1 className='text-7.5xl text-center sm:text-left sm:text-9xl font-bold h-full '>
					TALA<span className='inline-block text-4xl sm:text-5xl align-top ml-1 mt-3 sm:mt-4'>Ⓡ</span>
				</h1>
				<div className='flex flex-col sm:flex-row justify-around mt-10'>
					<p className='text-2xl sm:text-3xl w-80 sm:ml-4 sm:ml-10 leading-7'>
						<span className='inline-block ml-24 sm:ml-30'>An entirely</span> new fruit snack — made of fruit.
					</p>
					<div className='text-xs mt-10 w-36 self-end sm:w-auto sm:mt-0'>
						<p>ONE INGREDIENT.</p>
						<p>ONE INCREDIBLE CRUNCH.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
