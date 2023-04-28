import React from 'react';
import * as styles from './Footer.module.scss';

import logo from 'images/logo.svg';
import revkuLogo from 'images/revku_logo.svg';
import kvbsonikLogo from 'images/kvbsonik_logo.svg';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<img src={logo} alt="Math Mastermind Logo" />
			<div className={styles.author}>
				<span className={styles.by}>by</span>
				<a href="./revku">
					<img className={styles.authorLogo} src={revkuLogo} alt="Revku Logo" />
				</a>
				<span className={styles.and}>&</span>
				<a href="./kvbsonik">
					<img
						className={styles.authorLogo}
						src={kvbsonikLogo}
						alt="Kvbsonik Logo"
					/>
				</a>
			</div>
			<p className={styles.paragraph}>
				Math Mastermind 2023 &copy; Wszelkie prawa zastrzeżone
			</p>
		</div>
	);
};

export default Footer;
