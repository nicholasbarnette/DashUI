import { cleanup, renderHook } from '@testing-library/react-hooks';
import { useGenerateUniqueId } from '../useGenerateUniqueId';

afterEach(cleanup);

describe('useGenerateUniqueId', () => {
	it('returns id', () => {
		const id = renderHook(() => {
			return useGenerateUniqueId();
		}).result.current;
		expect(id).toEqual(expect.stringMatching(/^dashui-[A-F0-9]{10}$/));
	});

	it('returns id with prefix', () => {
		const id = renderHook(() => {
			return useGenerateUniqueId('test');
		}).result.current;
		expect(id).toEqual(expect.stringMatching(/^dashui-test-[A-F0-9]{10}$/));
	});

	it('returns id with custom length', () => {
		const id = renderHook(() => {
			return useGenerateUniqueId('test', 16);
		}).result.current;
		expect(id).toEqual(expect.stringMatching(/^dashui-test-[A-F0-9]{16}$/));
	});
});
