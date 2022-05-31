import spinner from './spinner.gif';
import React, { Component } from 'react';
// import "./App.css";
// import "./AppMobile.css";
import News from "./component/News";
import Header from "./component/Header2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App(props) {

	return (
		<div className="container">
            <div>
                <div>
                    <div className="tab" role="tabpanel">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs d-flex justify-content-center" role="tablist">
                            <li role="presentation"><a href="/us" role="tab">The US</a></li>
                            <li role="presentation"><a href="/ng" role="tab">Nigeria</a></li>
                        </ul>
                        {/* <a href="/us" >The US</a>
                        <a href="http://localhost:3000/ng" >Nigeria</a> */}
                        {/* Tab panes */}
                        <div className="tab-content tabs">
							<Router>
								<Routes>
									<Route path={'/'} element={<Navigate to="/ng" />} />
									<Route path={'/ng'} element={<News code="ng" />} />
									<Route path={'/us'} element={<News code="us" />} />
								</Routes>
							</Router>
                        </div>
                    </div>
                </div>
            </div>
        </div>		
	);
}

export default App;