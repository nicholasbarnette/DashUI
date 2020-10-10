import React, { FC } from 'react';
import { Component } from '../../types';
import { SVGProps, SVGType } from '../SVG';
import { DataCard } from './DataCard';
import { ImageCard } from './ImageCard';

export interface CardProps extends Component {
	variant:
		| {
				type: 'standard';
				title: string;
				description?: string;
				icon?: { svg: SVGType } & SVGProps;
		  }
		| {
				type: 'image';
				title: string;
				description?: string;
				image?: string;
				imageAlt?: string;
				icon?: { svg: SVGType } & SVGProps;
		  }
		| {
				type: 'data';
				title: string;
				value: string;
				description?: string;
				icon?: { svg: SVGType } & SVGProps;
				color?: string;
		  };
}

export const Card: FC<CardProps> = (props) => {
	const { variant, ...restProps } = props;
	const { type, ...cardProps } = variant;

	switch (type) {
		case 'image':
			return <ImageCard {...restProps} {...cardProps} />;
		case 'data':
			return <DataCard {...restProps} {...cardProps} />;
		default:
			return <ImageCard {...restProps} {...cardProps} />;
	}
};
