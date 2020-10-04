import React, { FC, useState } from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { TextArea } from '..';
import { TextAreaProps } from '../TextArea';

afterEach(cleanup);

const TextAreaWithChange: FC<TextAreaProps> = (props) => {
	const [value, setValue] = useState('');
	return <TextArea {...props} value={value} onChange={(v) => setValue(v)} />;
};

describe('basic input', () => {
	it('renders', () => {
		const { getByDisplayValue } = render(
			<TextArea value="My Input" onChange={() => {}} />,
		);
		expect(getByDisplayValue('My Input')).toBeTruthy();
	});

	it('displays placeholder', () => {
		const { getByPlaceholderText } = render(
			<TextArea
				placeholder="Email"
				value="My Input"
				onChange={() => {}}
			/>,
		);
		expect(getByPlaceholderText('Email')).toBeTruthy();
	});

	it('cannot overflow max length', () => {
		const { getByDisplayValue, getByPlaceholderText } = render(
			<TextAreaWithChange
				placeholder="Email"
				value=""
				onChange={() => {}}
				maxLength={10}
			/>,
		);
		const textArea = getByPlaceholderText('Email');
		expect(textArea).toBeTruthy();
		fireEvent.focus(textArea);
		fireEvent.change(textArea, {
			target: { value: '123456789' },
		});
		expect(getByDisplayValue('123456789')).toBeTruthy();
		fireEvent.change(textArea, {
			target: { value: '1234567890a' },
		});
		expect(getByDisplayValue('123456789')).toBeTruthy();
	});

	it('cannot change text when disabled', () => {
		const handleChange = jest.fn();
		const { getByDisplayValue } = render(
			<TextArea
				placeholder="Email"
				value="My Text Area"
				onChange={handleChange}
				disabled
			/>,
		);
		const textArea = getByDisplayValue('My Text Area');
		expect(textArea).toBeTruthy();
		fireEvent.focus(textArea);
		fireEvent.change(textArea, { target: { value: 'test@test.com' } });
		expect(handleChange).not.toHaveBeenCalled();
		expect(getByDisplayValue('My Text Area')).toBeTruthy();
	});
});
