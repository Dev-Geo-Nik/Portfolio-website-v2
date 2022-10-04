import React from "react";
import { Router as MyRouter } from "@reach/router";
import NotFoundPage from "../404";

// Here can use my dynamic routes
const App: React.FC = () => {
	return (
		<>
			<MyRouter basepath="/app">
				<NotFoundPage path="*" />
			</MyRouter>
		</>
	);
};

export default App;
