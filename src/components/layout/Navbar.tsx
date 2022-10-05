import React from "react";
import * as styles from "./navbar.module.scss";

import "../../assets/css/main.scss";
import HamburgerMenu from "../HamburgerMenu";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
	return (
		<>
			<Link to="/">
				<StaticImage src="../../assets/images/logo.png" alt="" placeholder="tracedSVG" className={styles.logo} />
			</Link>
			<HamburgerMenu />
		</>
	);
};

export default Navbar;
