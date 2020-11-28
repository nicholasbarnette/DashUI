import React, { FC, useEffect, useState } from 'react';
import {
	getColorArray,
	getHexColorString,
	getHSLColorString,
	getRGBColorString,
	HSL,
	hsl2rgb,
	rgb2hex,
} from './utils/conversions';
import { ColorWheel } from './ColorWheel';
import { ColorSlider } from './ColorSlider';
import { ColorSwatch } from './ColorSwatch';
import { Popover } from '../Popover/Popover';
import { useGenerateUniqueId } from '../../hooks';
import { Component } from '../../types';

export interface ColorPickerProps extends Component {
	color: string;
	onChange?: (value: string) => void;
	id?: string;
}

export const ColorPicker: FC<ColorPickerProps> = (props) => {
	const [color, setColor] = useState<HSL>(
		getColorArray(props.color) ?? [0, 0, 100],
	);
	const [isOpen, setIsOpen] = useState(false);
	const popoverId = useGenerateUniqueId(props.id ?? 'popover', 16);

	useEffect(() => {
		props.onChange?.(getHSLColorString(color));
	}, [color]);

	const checkClick = () => setIsOpen(false);
	useEffect(() => {
		window.addEventListener('click', checkClick);
		return () => {
			window.removeEventListener('click', checkClick);
		};
	}, []);

	return (
		<div>
			<ColorSwatch
				defaultColor={color}
				onPress={() => setIsOpen(!isOpen)}
			/>
			<Popover isOpen={isOpen} popoverId={popoverId}>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<ColorWheel
						onChange={(val) => setColor(val)}
						defaultColor={color}
						hue={color[0]}
						saturation={color[1]}
						lightness={color[2]}
					/>
					<ColorSlider
						defaultValue={color[0]}
						onChange={(hue) => setColor([hue, color[1], color[2]])}
					/>
				</div>
				<p>{getHSLColorString([color[0], color[1], color[2]])}</p>
				<p>
					{getRGBColorString(hsl2rgb([color[0], color[1], color[2]]))}
				</p>
				<p>
					{getHexColorString(
						rgb2hex(hsl2rgb([color[0], color[1], color[2]])),
					)}
				</p>
			</Popover>
		</div>
	);
};
