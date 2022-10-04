import React from "react";

import * as styles from "./home.module.scss";

import "../../assets/css/main.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Home: React.FC = () => {
	return (
		<section className={styles.home}>
			<div className={styles.shape}></div>
			<StaticImage src="../../images/icon.png" alt="" placeholder="tracedSVG" className={styles.logo} />
			<div className={styles.image_container}>
				<StaticImage src="../../assets/images/profil-image.png" alt="" placeholder="tracedSVG" className={styles.profile_image} />
			</div>
			<div className={styles.text_container}>
				<h1 className={styles.title}>
					Hi, I'm <span className={styles.name}>George Nikolaidis</span> a front-end web developer."Welcome to my portfolio".
				</h1>
				<Link to="/projects">View my projects</Link>
			</div>
			<nav className={styles.navigation}>
				<ul className={styles.list}>
					<li>
						<Link to="/" className={styles.link}>
							home
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Home;
