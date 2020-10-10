import React from 'react';
import { Menu } from '../../Menu';

export default {
	component: Menu,
	title: 'Components/Menu',
};

const onPressFn = (id: string) => {
	alert(`List item pressed: ${id}`);
};

export const Basic = () => {
	return (
		<Menu
			items={[
				{ id: 'item1', type: 'text', value: 'Item 1' },
				{ id: 'item2', type: 'text', value: 'Item 2' },
				{ id: 'item3', type: 'text', value: 'Item 3' },
			]}
			onPress={onPressFn}
			isOpen={true}
		></Menu>
	);
};

export const WithDivider = () => {
	return (
		<Menu
			items={[
				{ id: 'item1', type: 'text', value: 'Item 1' },
				{ id: 'item2', type: 'text', value: 'Item 2' },
				{ type: 'divider' },
				{ id: 'item3', type: 'text', value: 'Item 3' },
				{ id: 'item4', type: 'text', value: 'Item 4' },
			]}
			onPress={onPressFn}
			isOpen={true}
		></Menu>
	);
};
