import React, { FC } from 'react';
import { getHSLColorString, HSL } from './utils/conversions';

// Styles
import cn from './ColorSwatch.scss';

export interface ColorSwatchProps {
	defaultColor: HSL;
	onPress: () => void;
}

export const ColorSwatch: FC<ColorSwatchProps> = (props) => {
	return (
		<div
			tabIndex={0}
			className={cn.swatch}
			role="button"
			style={{
				backgroundColor: getHSLColorString(props.defaultColor),
			}}
			onClick={(event) => {
				props.onPress();
				event.stopPropagation();
			}}
			onKeyPress={(event) => {
				props.onPress();
				event.stopPropagation();
			}}
		></div>
	);
};
