import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../Global/GlobalContext";

export const PrivateRoute = ({ children }) => {
	const { current } = useContext(GlobalContext);
	return <div>{current ? children : <Navigate to='/signin' />}</div>;
};
