import React, { FC } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './NavigationLink.scss';

export interface NavigationLinkProps extends Component {
	link: string;
}

export const NavigationLink: FC<NavigationLinkProps> = (props) => {
	return (
		<a
			style={props.style}
			data-testid={props.testId}
			className={cx(cn.link, props.className)}
			tabIndex={0}
			href={props.link}
		>
			{props.children}
		</a>
	);
};
