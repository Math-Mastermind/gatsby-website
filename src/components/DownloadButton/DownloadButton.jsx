import React from 'react';
import * as styles from './DownloadButton.module.scss';

import icon from 'images/windows_icon.svg';

const DownloadButton = () => {
	return (
		<a href="./download/" className={styles.wrapper}>
			<img src={icon} className={styles.icon} alt="Windows Logo" />
			Pobierz dla Windows
		</a>
	);
};

export default DownloadButton;
