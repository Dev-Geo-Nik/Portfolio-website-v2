import React from "react";
import * as styles from "./navbar.module.scss";
import "../../assets/css/main.scss";
import HamburgerMenu from "../HamburgerMenu";
import { darkTheme, defaultTheme } from "../../util/Themes";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// libraries
import { FaAdjust } from "react-icons/fa";

const Navbar: React.FC = () => {
	const theme = localStorage.getItem("theme");

	if (theme) {
		let parsedTheme = JSON.parse(theme);

		if (parsedTheme === "light") {
			document.documentElement.style.cssText = defaultTheme;
		}

		if (parsedTheme == "dark") {
			document.documentElement.style.cssText = darkTheme;
		}
	}

	const handlerClick = () => {
		const theme = localStorage.getItem("theme");
		let parsedTheme = "";

		// set the initial theme value ,run onces
		if (localStorage.getItem("theme") === null) {
			console.log("run");
			document.documentElement.style.cssText = darkTheme;
			localStorage.setItem("theme", JSON.stringify("dark"));
			return;
		}
		if (theme) {
			parsedTheme = JSON.parse(theme);
		}

		if (parsedTheme === "light") {
			document.documentElement.style.cssText = darkTheme;
			localStorage.setItem("theme", JSON.stringify("dark"));
			return;
		}
		// default case
		if (parsedTheme == "dark") {
			document.documentElement.style.cssText = defaultTheme;
			localStorage.setItem("theme", JSON.stringify("light"));
		}
	};
	return (
		<>
			<Link to="/">
				<StaticImage src="../../assets/images/logo.png" alt="" placeholder="tracedSVG" className={styles.logo} />
			</Link>
			<FaAdjust className={styles.theme_icon} onClick={handlerClick} />
			<HamburgerMenu />
		</>
	);
};

export default Navbar;
