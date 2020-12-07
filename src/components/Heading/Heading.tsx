import React, { FC, ReactNode, useMemo } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Heading.scss';

export interface HeadingProps extends Component {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	title?: string;
	children: ReactNode;
}

export const Heading: FC<HeadingProps> = (props) => {
	const properties = useMemo(() => {
		return {
			style: props.style,
			className: cx(cn.heading, props.className),
			title:
				props.title ??
				`${typeof props.children === 'string' ? props.children : ''}`,
		};
	}, [props]);

	const heading = useMemo(() => {
		switch (props.level) {
			case 1:
				return <h1 {...properties}>{props.children}</h1>;
			case 2:
				return <h2 {...properties}>{props.children}</h2>;
			case 3:
				return <h3 {...properties}>{props.children}</h3>;
			case 4:
				return <h4 {...properties}>{props.children}</h4>;
			case 5:
				return <h5 {...properties}>{props.children}</h5>;
			default:
				return <h6 {...properties}>{props.children}</h6>;
		}
	}, [props.level]);

	return heading;
};
