import { cleanup, renderHook } from '@testing-library/react-hooks';
import { useTruncateText } from '../useTruncateText';

afterEach(cleanup);

describe('useTruncateText', () => {
	it('returns text', () => {
		const id = renderHook(() => {
			return useTruncateText('This is my text', 128);
		}).result.current;
		expect(id).toBe('This is my text');
	});

	it('returns truncated text', () => {
		const id = renderHook(() => {
			return useTruncateText('This is my text', 4);
		}).result.current;
		expect(id).toBe('This...');
	});
});
