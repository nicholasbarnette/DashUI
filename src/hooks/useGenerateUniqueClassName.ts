import { useMemo } from 'react';

export const useGenerateUniqueClassName = (length = 10): string => {
	const className = useMemo(() => {
		let newClassName = `dashui`;
		for (let i = 0; i < length; i++) {
			newClassName += Math.floor(Math.random() * 16)
				.toString(16)
				.toUpperCase();
		}
		return newClassName;
	}, [length]);

	return className;
};
