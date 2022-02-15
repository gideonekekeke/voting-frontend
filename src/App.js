import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Register from "./Components/Register";
import SignPage from "./Components/SignPage";

import { PrivateRoute } from "./Components/PrivateRoute";

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
					<Route path='/signin' element={<SignPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
