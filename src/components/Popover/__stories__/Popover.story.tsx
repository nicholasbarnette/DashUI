import React from 'react';
import { Popover } from '../../Popover';
import { Input } from '../../Input';
import { Text } from '../../Text';
import { TextArea } from '../../TextArea';

export default {
	component: Popover,
	title: 'Components/Popover',
};

export const Basic = () => {
	return (
		<Popover isOpen={true}>
			<Text>Popover Content</Text>
			<Input value="input" onChange={() => {}} />
			<TextArea value="input" onChange={() => {}} />
		</Popover>
	);
};
