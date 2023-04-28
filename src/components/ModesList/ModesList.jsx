import React from 'react';
import * as styles from './ModesList.module.scss';
import { modesList } from 'data/modesList';

const ModesList = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Dostępne tryby gry</h2>
			<div className={styles.items}>
				{modesList.map((el) => {
					return (
						<div className={styles.item} key={el.title}>
							<img
								className={styles.icon}
								src={el.icon}
								alt={`${el.title} Icon`}
							/>
							<h3 className={styles.itemTitle}>{el.title}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ModesList;
