import React, { useRef, useState } from "react";
import Links from "./Links";
import * as styles from "./hamburgerMenu.module.scss";

interface Props {
	styles?: any;
}

const HamburgerMenu: React.FC<Props> = ({ styles: st }) => {
	const [hovered, setHovered] = useState(false);
	const hamburgerContainerRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// console.log(isModalOpen);
	const isBrowser = typeof window !== "undefined";

	if (!isModalOpen) {
		if (isBrowser) {
			document.body.style.overflow = "auto";
		}
	}

	const onClickHandler = () => {
		if (isBrowser) {
			document.body.style.overflow = "hidden";
		}
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div className={styles.hamburger_container} ref={hamburgerContainerRef} onClick={onClickHandler} style={st}>
				<div className={isModalOpen ? `${styles.line_top} ${styles.lines} ${styles.transform_top}` : `${styles.line_top} ${styles.lines}`}></div>
				<div className={isModalOpen ? ` ${styles.lines} ${styles.transform_middle}` : ` ${styles.lines}`}></div>
				<div className={isModalOpen ? `${styles.line_bottom} ${styles.lines} ${styles.transform_bottom}` : `${styles.line_bottom} ${styles.lines}`}></div>
			</div>
			<div className={isModalOpen ? `${styles.modal_burger} ${styles.display_modal}` : `${styles.modal_burger}`} ref={modalRef}>
				<Links onClickHandler={onClickHandler} setHovered={setHovered} hovered={hovered} />
			</div>
		</>
	);
};

export default HamburgerMenu;
