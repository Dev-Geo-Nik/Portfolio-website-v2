import React from "react";
import * as styles from "./home.module.scss";

// Libraries
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FaGithubSquare, FaGithub, FaLinkedin, FaAdjust } from "react-icons/fa";
import Navbar from "../layout/Navbar";
import Shape from "../Shape";

const Home: React.FC = () => {
	return (
		<section className={styles.home}>
			<Navbar />
			<Shape />
			<div className={styles.image_container}>
				<StaticImage src="../../assets/images/profil-image.png" alt="" placeholder="tracedSVG" className={styles.profile_image} objectFit="fill" />
			</div>
			<div className={styles.text_container}>
				<h1 className={styles.title}>
					Hi, I'm &nbsp;
					<span className={styles.name}>
						<li>G</li>
						<li>e</li>
						<li>o</li>
						<li>r</li>
						<li>g</li>
						<li>e</li>
						&nbsp;
						<li>N</li>
						<li>i</li>
						<li>k</li>
						<li>o</li>
						<li>l</li>
						<li>a</li>
						<li>i</li>
						<li>d</li>
						<li>i</li>
						<li>s</li>
					</span>
					&nbsp; a front-end web developer."Welcome to my portfolio".
				</h1>
				<Link to="/projects" className={styles.btn_cta}>
					View my projects
				</Link>
			</div>
			<nav className={styles.social}>
				<ul className={styles.list}>
					<li>
						<a href="https://github.com/Dev-Geo-Nik" className={styles.link} target="_blank">
							<FaGithubSquare className={styles.githubIcon} />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/georgios-nikolaidis-61b040211/" className={styles.link} target="_blank">
							<FaLinkedin className={styles.linkedinIcon} />
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Home;
