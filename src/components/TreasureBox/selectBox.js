import { React } from 'react';
import context from '../../core/context';

const SelectBox = () => {
	const { actions, state, config: { boxColor }} = context;

	return <div>
		Select Box Color:{}
		<select
			value={ state.selectedColor }
			onChange={ (evt) => actions.setBoxColor(evt.target.value) }
		> {
				boxColor.map((color) =>
					<option key={ color } value={ color }>
						{color}
					</option>)
			};
		</select>
	</div>;
};

export default SelectBox;
