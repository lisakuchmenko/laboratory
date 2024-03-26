export function Hero() {
	return (
		<div className='h-auto w-full mt-10 xs:mt-10 text-text'>
			<div className='max-w-90 sm:max-w-262.5 mx-auto my-28'>
				<h1 className='text-7.5xl text-center sm:text-left sm:text-8.25xl/[100px] font-bold h-full uppercase w-[400px]'>
					tutti <span className='ml-52'>bites</span>
				</h1>
				<div className='flex flex-col sm:flex-row justify-around mt-10'>
					<p>
						A revolutionary fruity delight – crafted solely from the essence of
						nature.
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
