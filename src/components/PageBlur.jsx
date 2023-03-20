import { useAppContext } from './Context';

export function PageBlur({ children }) {
	const { openCart } = useAppContext();

	return (
		<div className={`${openCart ? 'blur-sm overlay_container' : ''} transition duration-500 ease-in-out`}>
			{children}
		</div>
	);
}
