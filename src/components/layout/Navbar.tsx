import React, { useEffect, useState } from "react";
import * as styles from "./navbar.module.scss";

import "../../assets/css/main.scss";
import HamburgerMenu from "../HamburgerMenu";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FaAdjust } from "react-icons/fa";
import { darkTheme, defaultTheme } from "../../util/Themes";

const Navbar: React.FC = () => {
	const handlerClick = () => {
		const theme = localStorage.getItem("theme");
		let parsedTheme = "";
		// set the initial theme value
		if (localStorage.getItem("theme") === undefined) {
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
