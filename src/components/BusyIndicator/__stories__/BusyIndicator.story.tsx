import React, { Fragment } from 'react';
import { BusyIndicator } from '../../BusyIndicator';

export default {
	component: BusyIndicator,
	title: 'Components/BusyIndicator',
};

export const Basic = () => {
	return <BusyIndicator />;
};

export const Container = () => {
	return (
		<Fragment>
			<div
				style={{
					height: '10rem',
					width: '10rem',
					backgroundColor: 'pink',
				}}
			>
				<BusyIndicator fillContainer />
			</div>
			<div
				style={{
					height: '20rem',
					width: '20rem',
					backgroundColor: 'lightblue',
				}}
			>
				<BusyIndicator fillContainer />
			</div>
			<div
				style={{
					height: '50rem',
					width: '50rem',
					backgroundColor: 'green',
				}}
			>
				<BusyIndicator fillContainer />
			</div>
		</Fragment>
	);
};
