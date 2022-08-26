import { React } from 'react';
import config from '../../core/config';

const two = 2;

const Box = (number) => {
	const zebra = number % two === 0 ? 'dark' : 'lite';
	const color = null;
	const box = number > 1
		? <div style={ color }className={ `text ${ zebra } ` }>{Box(number - 1)}</div>
		: <div id="number">{config.number - 1}</div>;

	return box;
};

export default Box;
