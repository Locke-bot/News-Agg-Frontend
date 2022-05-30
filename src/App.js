import spinner from './spinner.gif';
import React, { Component } from 'react';
// import "./App.css";
// import "./AppMobile.css";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(props) {

	return (
		<Router>
			<Routes>
		        <Route path={'/ng'} element={<News code="ng" />} />
				<Route path={'/us'} element={<News code="us" />} />
			</Routes>
		</Router>
	);
}

export default App;