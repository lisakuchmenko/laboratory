import { useState, useEffect } from 'react';

export function useProgressiveImg(lowQualitySrc, highQualitySrc) {
	const [src, setSrc] = useState(lowQualitySrc);

	useEffect(() => {
		setSrc(lowQualitySrc);
		const img = new Image();
		img.src = highQualitySrc;
		img.onload = () => {
			setSrc(highQualitySrc);
		};
	}, [lowQualitySrc, highQualitySrc]);

	return [src, { blur: src === lowQualitySrc }];
}
