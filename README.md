# DashUI

This is a lightweight component library built with the purpose of being able to quickly build out web applications.

### Installation

```sh
npm install @nickbarnette/dashui

#or

yarn add @nickbarnette/dashui
```

### Usage

```tsx
import React, { FC } from 'react';
import { Button } from '@nickbarnette/dashui';

const MyApplicationButton: FC<{
	tooltip: string;
	onPress: () => void;
	/* ... */
}> = (props) => {
	return (
		<Button tooltip={props.tooltip} onPress={props.onPress}>
			{props.children}
		</Button>
	);
};
```

### License

This package is provided under the [MIT license](https://github.com/nicholasbarnette/DashUI/blob/master/LICENSE).
