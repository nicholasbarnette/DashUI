import { cleanup } from '@testing-library/react';
import { InputValidator } from '..';

afterEach(cleanup);

describe('email validator', () => {
	it('validates proper emails', () => {
		expect(InputValidator('email')('myemail@email.com')).toBe(true);
		expect(InputValidator('email')('myemail@email.net')).toBe(true);
		expect(InputValidator('email')('myemail@gmail.live')).toBe(true);
	});

	it('invalidates improper emails', () => {
		expect(InputValidator('email')('myemail@email.')).toBe(false);
		expect(InputValidator('email')('myemail@email')).toBe(false);
		expect(InputValidator('email')('myemail@')).toBe(false);
		expect(InputValidator('email')('myemail')).toBe(false);
		expect(InputValidator('email')('myemail@.')).toBe(false);
	});
});

describe('password validator', () => {
	it('validates proper passwords', () => {
		expect(InputValidator('password')('Password1@')).toBe(true);
		expect(InputValidator('password')('passWord1$')).toBe(true);
		expect(InputValidator('password')('1$passworD')).toBe(true);
	});

	it('invalidates improper passwords', () => {
		expect(InputValidator('password')('password')).toBe(false);
		expect(InputValidator('password')('password1')).toBe(false);
		expect(InputValidator('password')('password$')).toBe(false);
		expect(InputValidator('password')('Password')).toBe(false);
		expect(InputValidator('password')('Password1')).toBe(false);
		expect(InputValidator('password')('Password$')).toBe(false);
	});
});

describe('date validator', () => {
	it('validates proper dates', () => {
		expect(InputValidator('date')('10/20/2000')).toBe(true);
		expect(InputValidator('date')('01/20/2000')).toBe(true);
		expect(InputValidator('date')('1/20/2000')).toBe(true);
		expect(InputValidator('date')('10/1/2000')).toBe(true);
		expect(InputValidator('date')('10/20/2040')).toBe(true);
	});

	it('invalidates improper dates', () => {
		expect(InputValidator('date')('10-20-2000')).toBe(false);
		expect(InputValidator('date')('01/20/01')).toBe(false);
		expect(InputValidator('date')('13/20/2000')).toBe(false);
	});
});
