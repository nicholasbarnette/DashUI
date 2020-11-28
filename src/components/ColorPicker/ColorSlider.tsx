import React, { FC, useRef, useState } from 'react';
import { HSL } from './utils/conversions';

// Styles
import cn from './ColorSlider.scss';

export interface ColorSliderProps {
	onChange?: (hue: HSL[0]) => void;
	defaultValue: number;
}

export const ColorSlider: FC<ColorSliderProps> = (props) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState((props.defaultValue / 360) * 100);
	const cursorDown = useRef(false);

	const calculateSelectedColor = (event: any, clicked?: boolean) => {
		if (sliderRef.current && (cursorDown.current || clicked)) {
			const sliderPos = sliderRef.current.getBoundingClientRect();
			const max_height = !!sliderPos.height ? sliderPos.height : 160;
			const clickPosition = event.clientY;
			const sliderOffset = !!sliderPos.y ? sliderPos.y : 0;
			const val = Math.round(
				Math.min(clickPosition - sliderOffset, max_height),
			);
			setPosition(Math.round((val / max_height) * 100));
			props.onChange?.(Math.round((val * 360) / max_height));
		}
	};

	return (
		<div
			className={cn.colorSlider}
			ref={sliderRef}
			onClick={(event) => calculateSelectedColor(event, true)}
			role="slider"
			onMouseDown={() => {
				if (sliderRef.current) {
					sliderRef.current.addEventListener(
						'mousemove',
						calculateSelectedColor,
					);
					cursorDown.current = true;
				}
			}}
			onMouseUp={() => {
				if (sliderRef.current) {
					sliderRef.current.removeEventListener(
						'mousemove',
						calculateSelectedColor,
					);
					cursorDown.current = false;
				}
			}}
		>
			<div
				style={{
					height: '4px',
					width: '100%',
					backgroundColor: '#FFFFFF',
					position: 'absolute',
					top: `${position}%`,
				}}
			></div>
		</div>
	);
};
