import React, { useState, createContext, ReactNode } from "react";
interface Test {
	children: any;
}
// export const ThemeContext = createContext<any>({ theme: "light" });
// export const ThemeProvider: React.FC<Test> = ({ children }) => {
// 	const [theme, setTheme] = useState("light");

// 	return <ThemeProvider.Provider value={{ theme, setTheme }}>{children}</ThemeProvider.Provider>;
// };

// //Provider name must start with capital letter
// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
// 	const [theme, setTheme] = useState("light");

// 	return <ThemeProvider.Provider value={{ theme, setTheme }}> {children} </ThemeProvider.Provider>;
// };
