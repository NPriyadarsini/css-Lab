import { React } from 'react';
import config from '../../core/config';
import Box from './box';
import './index.css';

const TreasureBox = () =>
	<div>
		<div className="Box">
			{Box(config.number)}
		</div>
	</div>;

export default TreasureBox;
