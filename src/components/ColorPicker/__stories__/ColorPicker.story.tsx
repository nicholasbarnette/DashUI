import React, { FC, Fragment, useState } from 'react';
import { ColorPicker } from '../';
import { Input } from '../../Input';

export default {
	component: ColorPicker,
	title: 'Components/ColorPicker',
};

const ColorPickerContainer: FC<{ defaultColor: string }> = (props) => {
	const [color, setColor] = useState(props.defaultColor);
	return <ColorPicker color={color} onChange={(c) => setColor(c)} />;
};

export const Basic = () => {
	return <ColorPickerContainer defaultColor="hsl(0, 0%, 0%)" />;
};

export const CustomDefaultColor = () => {
	return <ColorPickerContainer defaultColor="hsl(250, 50%, 50%)" />;
};

export const UpdateColorExternally = () => {
	const [color, setColor] = useState('hsl(250, 50%, 50%)');
	return (
		<Fragment>
			<Input value={color} onChange={(val) => setColor(val)} />
			<ColorPicker color={color} />
		</Fragment>
	);
};
