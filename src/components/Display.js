import { React } from 'react';
import Logo from './logo';
import Pendulum from './pendulum';

const components = {
	Logo,
	Pendulum,
};

const Display = (context) => {
	const { state: { selected }} = context;
	const SelectedComponent = components[selected];

	return <SelectedComponent/>;
};

export default Display;
