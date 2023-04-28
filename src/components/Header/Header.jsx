import React from 'react';
import * as styles from './Header.module.scss';

import DownloadButton from 'components/DownloadButton/DownloadButton';
import screen from 'images/screen.jpg';

const Header = () => {
	return (
		<div>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Naucz się matematyki z Math Mastermind</h1>
				<p className={styles.paragraph}>
					Math Mastermind to interaktywna aplikacja dla systemu Windows, która
					umożliwia naukę matematyki poprzez proste gry i generowanie kolejnych
					zadań matematycznych.
				</p>
				<DownloadButton />
			</div>
			<div className={styles.heroSection}>
				<img className={styles.hero} src={screen} alt="Screenshot" />
			</div>
		</div>
	);
};

export default Header;
