import React from 'react';
import {
	SVG,
	StarEmpty,
	HeartFilled,
	HeartEmpty,
	StarFilled,
	Home,
	Close,
} from '../../SVG';

export default {
	component: SVG,
	title: 'Components/SVG',
};

export const Basic = () => {
	return (
		<div>
			<SVG svg={StarEmpty} tooltip="" />
			<SVG svg={StarFilled} tooltip="" />
			<SVG svg={HeartEmpty} tooltip="" />
			<SVG svg={HeartFilled} tooltip="" />
			<SVG svg={Home} tooltip="" />
			<SVG svg={Close} tooltip="" />
		</div>
	);
};

export const CustomSize = () => {
	return (
		<div>
			<SVG svg={StarEmpty} tooltip="" size={50} />
			<SVG svg={StarFilled} tooltip="" size={50} />
			<SVG svg={HeartEmpty} tooltip="" size={50} />
			<SVG svg={HeartFilled} tooltip="" size={50} />
			<SVG svg={Home} tooltip="" size={50} />
			<SVG svg={Close} tooltip="" size={50} />
		</div>
	);
};

export const CustomColor = () => {
	return (
		<div>
			<SVG
				svg={StarEmpty}
				tooltip=""
				size={50}
				customColor={{ default: 'lightblue', inverse: 'red' }}
			/>
			<SVG
				svg={StarFilled}
				tooltip=""
				size={50}
				customColor={{ default: 'pink', inverse: 'red' }}
			/>
			<SVG
				svg={HeartEmpty}
				tooltip=""
				size={50}
				customColor={{ default: 'red', inverse: 'red' }}
			/>
			<SVG
				svg={HeartFilled}
				tooltip=""
				size={50}
				customColor={{ default: 'red', inverse: 'red' }}
			/>
			<SVG
				svg={Home}
				tooltip=""
				size={50}
				customColor={{ default: 'orange', inverse: 'red' }}
			/>
			<SVG
				svg={Close}
				tooltip=""
				size={50}
				customColor={{ default: 'purple', inverse: 'red' }}
			/>
		</div>
	);
};
