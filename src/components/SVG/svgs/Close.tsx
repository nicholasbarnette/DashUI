import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Close: SVGType = {
	name: 'Close',
	render: (props: SVGObjectProps) => {
		const { tooltip, label, ...restProps } = props;
		return (
			<svg
				{...restProps}
				aria-labelledby={`${label}SVG`}
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title id={`${label}SVG`}>{props.tooltip}</title>
				<path d="M6.41423 5.7071C6.80476 5.31657 7.43792 5.31658 7.82844 5.7071L15.6066 13.4853L23.3847 5.70714C23.7752 5.31662 24.4084 5.31661 24.7989 5.70714L25.5061 6.41427C25.8966 6.80479 25.8966 7.43795 25.5061 7.82848L17.7279 15.6066L25.5061 23.3848C25.8966 23.7753 25.8966 24.4085 25.5061 24.799L24.799 25.5061C24.4085 25.8966 23.7753 25.8966 23.3848 25.5061L15.6066 17.7279L7.82835 25.5061C7.43782 25.8966 6.80466 25.8966 6.41414 25.5061L5.7071 24.7991C5.31658 24.4085 5.31658 23.7754 5.7071 23.3848L13.4853 15.6066L5.70713 7.82841C5.3166 7.43788 5.3166 6.80472 5.70713 6.4142L6.41423 5.7071Z" />
			</svg>
		);
	},
};

export default Close;
