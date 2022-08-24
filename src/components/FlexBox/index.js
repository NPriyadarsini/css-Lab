import { React } from 'react';
import './index.css';
import ColumFlexBox from './columnFlexBox';
import RowFlexBox from './rowFlexBox';
import SelectBox from './selectBox';

const Flex = () =>
	<div>
		<SelectBox/>
		<div className="flex">{RowFlexBox()}{ColumFlexBox()}</div>
	</div>;

export default Flex;
