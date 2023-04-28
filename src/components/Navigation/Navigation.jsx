import React from 'react';
import * as styles from './Navigation.module.scss';

import logo from 'images/logo.svg';
import menuIcon from 'images/menu_icon.svg';
import closeIcon from 'images/close_icon.svg';
import DownloadButton from 'components/DownloadButton/DownloadButton';

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<div className={styles.wrapper}>
			<div>
				<a href="./" className={styles.logoLink}>
					<img className={styles.logo} src={logo} alt="Math Mastermind Logo" />
				</a>
			</div>

			<img
				className={styles.menuIcon}
				src={menuIcon}
				alt="Menu open icon"
				onClick={openMenu}
			/>

			<div className={`${!isMenuOpen && styles.menuClosed} ${styles.content}`}>
				<div className={styles.closeIconWrapper}>
					<img
						className={styles.closeIcon}
						src={closeIcon}
						alt="Menu close icon"
						onClick={closeMenu}
					/>
				</div>
				<div className={styles.items}>
					<a className={styles.item} href="./">
						Strona główna
					</a>
					<a className={styles.item} href="./docs/">
						Dokumentacja
					</a>
					<a className={`${styles.item} ${styles.lastItem}`} href="./github/">
						GitHub
					</a>
					<DownloadButton />
				</div>
			</div>
		</div>
	);
};

export default Navigation;
