import React, { FC, useState } from 'react';
import { ColorPicker } from '../';
import { HSL } from '../utils/conversions';

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
