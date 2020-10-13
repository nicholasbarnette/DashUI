import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { useCookies } from '../useCookies';

afterEach(cleanup);

describe('useCookies', () => {
	it('returns a single cookie', () => {
		const testCookie = 'test1=mycookie';
		Object.defineProperty(document, 'cookie', {
			configurable: true,
			get: jest.fn().mockImplementation(() => {
				return testCookie;
			}),
			set: jest.fn().mockImplementation(() => {}),
		});
		const [cookies, setCookie] = renderHook(() => {
			return useCookies();
		}).result.current;
		expect(cookies).toEqual({ test1: 'mycookie' });
	});

	it('returns multiplpe cookies', () => {
		const testCookie =
			'test1=mycookie; test2=myothercookie; test3=mythirdcookie; ';
		Object.defineProperty(document, 'cookie', {
			configurable: true,
			get: jest.fn().mockImplementation(() => {
				return testCookie;
			}),
			set: jest.fn().mockImplementation(() => {}),
		});
		const [cookies, setCookie] = renderHook(() => {
			return useCookies();
		}).result.current;
		expect(cookies).toEqual({
			test1: 'mycookie',
			test2: 'myothercookie',
			test3: 'mythirdcookie',
		});
	});

	it('sets and updates cookies', async () => {
		let testCookie =
			'test1=mycookie; test2=myothercookie; test3=mythirdcookie;';
		Object.defineProperty(document, 'cookie', {
			configurable: true,
			get: jest.fn().mockImplementation(() => {
				return testCookie;
			}),
			set: jest.fn().mockImplementation((cookie) => {
				const c = cookie.replace(';', '').split('=');
				if (document.cookie.includes(c[0])) {
					testCookie = document.cookie.replace(
						new RegExp(`${c[0]}=[a-z]+;`),
						cookie,
					);
				} else {
					testCookie = `${document.cookie} ${cookie}`;
				}
			}),
		});
		const hook = renderHook(
			() => {
				return useCookies();
			},
			{
				initialProps: false,
			},
		);
		hook.rerender(true);
		expect(hook.result.current[0]).toEqual({
			test1: 'mycookie',
			test2: 'myothercookie',
			test3: 'mythirdcookie',
		});
		act(() => {
			hook.result.current[1]('test4', 'myfourthcookie');
		});
		hook.rerender(true);
		expect(hook.result.current[0]).toEqual({
			test1: 'mycookie',
			test2: 'myothercookie',
			test3: 'mythirdcookie',
			test4: 'myfourthcookie',
		});
		act(() => {
			hook.result.current[1]('test2', 'mynewcookie');
		});
		hook.rerender(true);
		expect(hook.result.current[0]).toEqual({
			test1: 'mycookie',
			test2: 'mynewcookie',
			test3: 'mythirdcookie',
			test4: 'myfourthcookie',
		});
	});
});
