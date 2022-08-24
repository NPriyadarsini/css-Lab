import { React } from 'react';
import context from '../../core/context';

const BlueStyle = () => ({
	flexGrow: context.state.selectedFlex === 'blue' ? 1 : 0,
});
const GreenStyle = () => ({
	flexGrow: context.state.selectedFlex === 'green' ? 1 : 0,
});
const RedStyle = () => ({
	flexGrow: context.state.selectedFlex === 'red' ? 1 : 0,
});

const ColumnFlexBox = () =>
	<div className="column-container">
		<div className="color red" style={ RedStyle() }/>
		<div className="color green" style={ GreenStyle() }/>
		<div className="color blue" style={ BlueStyle() }/>
	</div>;

export default ColumnFlexBox;
