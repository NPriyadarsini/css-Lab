import { React } from 'react';
import Logo from './Logo';
import Pendulum from './Pendulum';
import FlexBox from './FlexBox';
import TreasureBox from './TreasureBox';

const components = {
	Logo,
	Pendulum,
	FlexBox,
	TreasureBox,
};

const Display = (context) => {
	const { state: { selected }} = context;
	const SelectedComponent = components[selected];

	return <SelectedComponent/>;
};

export default Display;
