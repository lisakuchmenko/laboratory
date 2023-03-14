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
		<div className='w-full h-screen overflow-hidden mb-0 sm:mb-64 relative'>
			<div
				ref={firstLineRef}
				className='overflow-hidden whitespace-nowrap flex text-8xl font-bold h-25 absolute top-0 '
			>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
			</div>
			<div ref={secondLineRef} className='flex text-8xl font-bold h-25 absolute top-25'>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
			</div>
			<div ref={thirdLineRef} className='flex text-8xl font-bold h-25 absolute top-[200px]'>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
			</div>
			<div ref={fourthLineRef} className='flex text-8xl font-bold h-25 absolute top-[300px] '>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
			</div>
			<div ref={fifthLineRef} className='flex text-8xl font-bold h-25 absolute top-[400px]'>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
			</div>
			<div ref={sixthLineRef} className='flex text-8xl font-bold h-25 absolute top-[500px] '>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
				<div>ONE</div>
				<div className='transparent-text'>ONE</div>
			</div>
		</div>
	);
}
