import { React } from 'react';
import './App.css';
import Display from './components/Display';
import SelectBox from './components/selectBox';

const App = (context) =>
	<div className="App">
		<SelectBox{ ...context }/>
		<Display{ ...context }/>
	</div>
	;

export default App;
