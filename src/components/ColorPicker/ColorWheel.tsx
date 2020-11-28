import React, { FC, useEffect, useRef, useState } from 'react';
import { getRGBColorString, hsl2rgb, HSL } from './utils/conversions';

// Styles
import cn from './ColorWheel.scss';

export interface ColorWheelProps {
	defaultColor?: HSL;
	hue: HSL[0];
	saturation: HSL[1];
	lightness: HSL[2];
	onChange?: (value: HSL) => void;
}

export const ColorWheel: FC<ColorWheelProps> = (props) => {
	const [saturation, setSaturation] = useState(props.defaultColor?.[1] ?? 0);
	const [lightness, setLightness] = useState(props.defaultColor?.[2] ?? 100);

	const colorWheelRef = useRef<HTMLDivElement>(null);
	const cursorDown = useRef(false);
	const [position, setPosition] = useState(() => {
		if (props.defaultColor) {
			return { x: props.defaultColor[1], y: props.defaultColor[2] };
		}
		return { x: 0, y: 0 };
	});

	const calculateSelectedColor = (event: any, clicked?: boolean) => {
		if (colorWheelRef.current && (cursorDown.current || clicked)) {
			const wheelPos = colorWheelRef.current.getBoundingClientRect();
			const max_width = !!wheelPos.width ? wheelPos.width : 160;
			const max_height = !!wheelPos.height ? wheelPos.height : 160;
			const clickPositionY = event.clientY;
			const clickPositionX = event.clientX;
			const sliderOffsetY = !!wheelPos.y ? wheelPos.y : 0;
			const sliderOffsetX = !!wheelPos.x ? wheelPos.x : 0;
			const saturation =
				(Math.min(clickPositionX - sliderOffsetX, max_width) /
					max_width) *
				100;
			const lightness =
				100 -
				(Math.min(clickPositionY - sliderOffsetY, max_height) /
					max_height) *
					100;
			setPosition({
				x: saturation,
				y: lightness,
			});
			calculateColor(saturation, lightness);
			props.onChange?.([
				Math.round(props.hue),
				Math.round(saturation),
				Math.round(lightness),
			]);
		}
	};

	const calculateColor = (saturation: number, lightness: number) => {
		setSaturation(Math.round(saturation));
		setLightness(Math.round(lightness));
	};

	return (
		<div
			style={{
				height: '10rem',
				width: '10rem',
				border: '1px solid black',
				position: 'relative',
				backgroundColor: getRGBColorString(
					hsl2rgb([props.hue, 100, 50]),
				),
			}}
			role="slider"
			className={cn.colorSquare}
			ref={colorWheelRef}
			onClick={(event) => calculateSelectedColor(event, true)}
			onMouseDown={() => {
				if (colorWheelRef.current) {
					colorWheelRef.current.addEventListener(
						'mousemove',
						calculateSelectedColor,
					);
					cursorDown.current = true;
				}
			}}
			onMouseUp={() => {
				if (colorWheelRef.current) {
					colorWheelRef.current.removeEventListener(
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
					width: '4px',
					backgroundColor: 'red',
					borderRadius: '100%',
					position: 'absolute',
					bottom: `${position.y}%`,
					left: `${position.x}%`,
				}}
			></div>
		</div>
	);
};
