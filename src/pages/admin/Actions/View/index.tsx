import { useState } from 'react';
import Button from '../../../../core/Button';
import Label from '../../../../core/Label';
import Modal from '../../../../core/Modal';
import styles from '../../styles.module.scss';

const View = ({ activeUser }: any) => {
	const [isViewModalShown, setIsViewModalShown] = useState<boolean>(false);

	return (
		<>
			<Button handleClick={() => setIsViewModalShown(true)}>View</Button>
			<Modal isShown={isViewModalShown} handleClose={() => setIsViewModalShown(false)}>
				<h2 className={styles.subtitle}>View</h2>
				<div className={styles.labelWrapper}>
					<Label>Fullname: </Label>
					<span className={styles.description}>{activeUser.fullname}</span>
				</div>
				<div className={styles.labelWrapper}>
					<Label>Description: </Label>
					<span className={styles.description}>{activeUser.description}</span>
				</div>
				<div className={styles.modalActions}>
					<Button handleClick={() => setIsViewModalShown(false)}>Close</Button>
				</div>
			</Modal>
		</>
	);
};

export default View;
