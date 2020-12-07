import React, { Fragment } from 'react';
import { ProgressBar } from '../';
import { Input } from '../../Input';
import { Text } from '../../Text';
import { TextArea } from '../../TextArea';

export default {
	component: ProgressBar,
	title: 'Components/ProgressBar',
};

export const Basic = () => {
	return (
		<div style={{ width: '15rem' }}>
			<ProgressBar label="Loading..." percentage={0} />
			<ProgressBar label="Loading..." percentage={25} />
			<ProgressBar label="Loading..." percentage={50} />
			<ProgressBar label="Loading..." percentage={75} />
			<ProgressBar label="Loading..." percentage={100} />
		</div>
	);
};
