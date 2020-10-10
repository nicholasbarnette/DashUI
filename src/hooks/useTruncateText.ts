import { useMemo } from 'react';

export const useTruncateText = (text: string, length: number) => {
	const truncatedText = useMemo(() => {
		return text.length > length ? `${text.slice(0, length)}...` : text;
	}, [text, length]);
	return truncatedText;
};
