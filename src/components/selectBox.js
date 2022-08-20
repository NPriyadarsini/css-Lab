import { React } from 'react';

const SelectBox = (context) => {
	const { actions, state, config: { components }} = context;

	return <div>
		<select
			value={ state.selected }
			onChange={ (evt) => actions.setDisplayComponent(evt.target.value) }
		> {
				components.map((component) =>
					<option key={ component } value={ component }>
						{component}
					</option>)
			};
		</select>
	</div>;
};

export default SelectBox;
