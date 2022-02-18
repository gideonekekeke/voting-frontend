import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Register from "./Components/Register";
import SignPage from "./Components/SignPage";

import { PrivateRoute } from "./Components/PrivateRoute";
import PresidentPage from "./Components/PresidentPage";
import Secretary from "./Components/Secretary";

function App() {
	return (
		<div>
			{" "}
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<PrivateRoute>
								<HomeScreen />
							</PrivateRoute>
						}
					/>
					<Route path='/register' element={<Register />} />
					<Route path='/president' element={<PresidentPage />} />
					<Route path='/secretary' element={<Secretary />} />
					<Route path='/signin' element={<SignPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
