import React from 'react';
import './App.css';
import DataFetching from './Datafetching';
import Getqs from './Getqs';
import Chatbotui from './chatbot/chatbotui';
import Form from './form';
import Selectskill from './selectskill';
import SpecificForm from './SpecificForm';
import Selectskillz from './selectskill2';
import Formcopy from './formcopy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				{/* <h1>hello</h1> */}
				<Routes>
					<Route
						path="/"
						element={
							// <h2>hi</h2>
							<Chatbotui />
						}
					/>

					<Route path="/skill" element={<Selectskillz />} />

					<Route path="/questions" element={<Formcopy />} />

					<Route
						path="/questions/:skilltype_id"
						element={
							<Getqs />
							// {<SpecificForm/>}
							// <Formcopy />
						}
					/>

					<Route path="/test" element={<DataFetching />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
