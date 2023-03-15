import { ParallaxText } from './ParallaxText';

export function ParallaxComponent() {
	return (
		<div className='mb-0 sm:mb-64'>
			<ParallaxText baseVelocity={-2}>One</ParallaxText>
			<ParallaxText baseVelocity={2}>One</ParallaxText>
			<ParallaxText baseVelocity={-2}>One</ParallaxText>
			<ParallaxText baseVelocity={2}>One</ParallaxText>
			<ParallaxText baseVelocity={-2}>One</ParallaxText>
			<ParallaxText baseVelocity={2}>One</ParallaxText>
		</div>
	);
}
