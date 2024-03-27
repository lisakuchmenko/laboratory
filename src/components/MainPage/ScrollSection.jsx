import { useRef } from 'react';

export function ScrollSection() {
	const firstLineRef = useRef(null);
	const secondLineRef = useRef(null);
	const thirdLineRef = useRef(null);
	const fourthLineRef = useRef(null);
	const fifthLineRef = useRef(null);
	const sixthLineRef = useRef(null);

	window.onscroll = () => {
		const scroll = window.scrollY - 3700;

		firstLineRef.current.style.left = `-${scroll}px`;
		secondLineRef.current.style.right = `-${scroll}px`;
		thirdLineRef.current.style.left = `-${scroll}px`;
		fourthLineRef.current.style.right = `-${scroll}px`;
		fifthLineRef.current.style.left = `-${scroll}px`;
		sixthLineRef.current.style.right = `-${scroll}px`;
	};

	return (
		<section className='w-full h-[1220px] overflow-hidden mb-0 sm:mb-64 relative'>
			<div
				ref={firstLineRef}
				className='overflow-hidden whitespace-nowrap flex text-12xl font-normal tracking-[0.2px] leading-[330px] h-[275px] absolute top-0 '
			>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
			</div>
			<div ref={secondLineRef} className='flex text-12xl font-normal tracking-[0.2px] leading-[330px] h-[275px] absolute top-50'>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
			</div>
			<div ref={thirdLineRef} className='flex text-12xl font-normal tracking-[0.2px] leading-[330px] h-[275px] absolute top-[400px]'>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
			</div>
			<div ref={fourthLineRef} className='flex text-12xl font-normal tracking-[0.2px] leading-[330px] h-[275px] absolute top-[600px] '>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
			</div>
			<div ref={fifthLineRef} className='flex text-12xl font-normal tracking-[0.2px] leading-[330px] h-[275px] absolute top-[800px]'>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
			</div>
			<div ref={sixthLineRef} className='flex text-12xl font-normal tracking-[0.2px] leading-[330px] h-[275px] absolute top-[1000px] '>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
				<div>ONE</div>
				<div className='opacity-10 text-text'>ONE</div>
			</div>
		</section>
	);
}
