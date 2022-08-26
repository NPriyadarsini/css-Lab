import { React } from 'react';
import config from '../../core/config';
import Box from './box';
import './index.css';
import SelectBox from './selectBox';

const TreasureBox = () =>
	<div>
		<div className="Box">
			<SelectBox/>
			{Box(config.number)}
		</div>
	</div>;

export default TreasureBox;
