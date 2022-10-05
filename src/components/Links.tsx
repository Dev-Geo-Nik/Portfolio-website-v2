import { Link } from "gatsby";
import React from "react";
import * as styles from "./links.module.scss";

interface Props {
	onClickHandler: () => void;
	setHovered: React.Dispatch<React.SetStateAction<boolean>>;
	hovered: boolean;
}

const active = {
	display: "none",
};
const Links: React.FC<Props> = (props) => {
	const { onClickHandler, setHovered, hovered } = props;

	return (
		<>
			<ul className={styles.list_container}>
				<Link className={styles.link} to="/" onClick={onClickHandler} activeStyle={active}>
					Home
				</Link>
				<Link className={styles.link} to="/projects" onClick={onClickHandler} activeStyle={active}>
					Projects
				</Link>
			</ul>
		</>
	);
};

export default Links;
