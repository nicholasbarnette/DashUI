import { useEffect, useState } from 'react';

export const useCookies = (): [
	{ [key: string]: string },
	(name: string, value: string) => void,
] => {
	const [cookiesInner, setCookiesInner] = useState<{ [key: string]: string }>(
		{},
	);

	const setCookie = (name: string, value: string) => {
		document.cookie = `${name}=${value};`;
		setCookiesInner({ ...cookiesInner, [name]: value });
	};

	useEffect(() => {
		const documentCookies = decodeURIComponent(document.cookie);
		const cookies = documentCookies.split(';');
		let cookieObj: { [key: string]: string } = {};
		for (let c of cookies) {
			const cookie = c.trim().split('=');
			if (cookie[0].length > 0) {
				cookieObj[cookie[0]] = cookie[1];
			}
		}
		setCookiesInner(cookieObj);
	}, []);

	return [cookiesInner, setCookie];
};
