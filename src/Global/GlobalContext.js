import React, { createContext } from "react";

export const GlobalContext = createContext();

export const AuthProvider = ({ children }) => {
	const [current, setCurrent] = React.useState(null);

	React.useEffect(() => {
		const GetStorageItem = JSON.parse(localStorage.getItem("voteUser"));

		setCurrent(GetStorageItem);
		console.log("thosdfehndzmxcdhfjk", current);
	}, []);

	return (
		<GlobalContext.Provider value={{ current }}>
			{children}
		</GlobalContext.Provider>
	);
};
