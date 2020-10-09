import { useMemo } from 'react';

export const useGenerateUniqueId = (prefix = '', length = 10): string => {
	const id = useMemo(() => {
		let newId = `dashui-${!!prefix ? `${prefix}-` : ''}`;
		for (let i = 0; i < length; i++) {
			newId += Math.floor(Math.random() * 16)
				.toString(16)
				.toUpperCase();
		}
		return newId;
	}, [prefix, length]);

	return id;
};
