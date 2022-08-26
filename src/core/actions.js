const setDisplayComponent = (context) => ({
	selected: context.data,
});
const setFlexColor = ({ data }) => ({
	selectedFlex: data,
});
const setBoxColor = ({ data }) => ({
	selectedColor: data,
});
const actions = {
	setDisplayComponent,
	setFlexColor,
	setBoxColor,
};

export default actions;
