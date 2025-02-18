import { useMemo } from 'react';

export const useGenerateUniqueClassName = (
	length = 10,
	prefix?: string,
): string => {
	const className = useMemo(() => {
		let newClassName = `dashui${!!prefix ? `-${prefix}` : ''}`;
		for (let i = 0; i < length; i++) {
			newClassName += Math.floor(Math.random() * 16)
				.toString(16)
				.toUpperCase();
		}
		return newClassName;
	}, [length]);

	return className;
};
