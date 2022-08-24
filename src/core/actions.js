const setDisplayComponent = (context) => ({
	selected: context.data,
});
const setFlexColor = ({ data }) => ({
	selectedFlex: data,
});

const actions = {
	setDisplayComponent,
	setFlexColor,
};

export default actions;
