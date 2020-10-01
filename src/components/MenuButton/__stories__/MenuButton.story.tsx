import React from 'react';
import { MenuButton } from '../';

export default {
	component: MenuButton,
	title: 'MenuButton',
};

const onPressFn = (id: string) => {
	// Do nothing
};

export const Basic = () => {
	return (
		<MenuButton
			tooltip="Menu Button"
			items={[
				{ id: 'item1', type: 'text', value: 'Item 1' },
				{ id: 'item2', type: 'text', value: 'Item 2' },
				{ id: 'item3', type: 'text', value: 'Item 3' },
			]}
			onPress={onPressFn}
		>
			Menu Button
		</MenuButton>
	);
};

export const Position = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<MenuButton
					tooltip="Menu Button"
					items={[
						{ id: 'item1', type: 'text', value: 'Item 1' },
						{ id: 'item2', type: 'text', value: 'Item 2' },
						{ id: 'item3', type: 'text', value: 'Item 3' },
					]}
					onPress={onPressFn}
				>
					Menu Button
				</MenuButton>
				<MenuButton
					tooltip="Menu Button"
					items={[
						{ id: 'item1', type: 'text', value: 'Item 1' },
						{ id: 'item2', type: 'text', value: 'Item 2' },
						{ id: 'item3', type: 'text', value: 'Item 3' },
					]}
					onPress={onPressFn}
				>
					Menu Button
				</MenuButton>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<MenuButton
					tooltip="Menu Button"
					items={[
						{ id: 'item1', type: 'text', value: 'Item 1' },
						{ id: 'item2', type: 'text', value: 'Item 2' },
						{ id: 'item3', type: 'text', value: 'Item 3' },
					]}
					onPress={onPressFn}
				>
					Menu Button
				</MenuButton>
				<MenuButton
					tooltip="Menu Button"
					items={[
						{ id: 'item1', type: 'text', value: 'Item 1' },
						{ id: 'item2', type: 'text', value: 'Item 2' },
						{ id: 'item3', type: 'text', value: 'Item 3' },
					]}
					onPress={onPressFn}
				>
					Menu Button
				</MenuButton>
			</div>
		</div>
	);
};
