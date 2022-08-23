import { React } from 'react';
import './index.css';
import ColumFlexBox from './columnFlexBox';
import RowFlexBox from './rowFlexBox';

const Flex = () =>
	<div>
		<div className="flex">{RowFlexBox()}{ColumFlexBox()}</div>
	</div>;

export default Flex;
