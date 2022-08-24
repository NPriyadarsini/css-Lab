import { React } from 'react';
import context from '../../core/context';

const SelectBox = () => {
	const { actions, state, config: { flexColor }} = context;

	return <div id="flex-select">
		Select Box Color:{}
		<select
			value={ state.selectedFlex }
			onChange={ (evt) => actions.setFlexColor(evt.target.value) }
		> {
				flexColor.map((color) =>
					<option key={ color } value={ color }>
						{color}
					</option>)
			};
		</select>
	</div>;
};

export default SelectBox;
