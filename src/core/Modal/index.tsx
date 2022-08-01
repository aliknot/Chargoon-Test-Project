import { useEffect, useRef } from 'react';
import { ModalProps } from '../../interfaces/core';
import styles from './styles.module.scss';

const Modal = ({ isShown, handleClose, children }: ModalProps) => {
	const modalWrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.body.style.overflow = isShown ? 'hidden' : 'auto';
		if (modalWrapRef.current) {
			if (!isShown) {
				setTimeout(() => {
					if (modalWrapRef.current) {
						modalWrapRef.current.style.zIndex = '-1';
					}
				}, 950);
				return;
			}

			modalWrapRef.current.style.zIndex = '0';
		}
	}, [isShown]);

	return (
		<div ref={modalWrapRef} className={`${styles.modalWrap}${isShown ? ' ' + styles.visible : ''}`}>
			<div className={styles.backdrop} onClick={handleClose} />
			<div className={styles.modal}>
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
};

export default Modal;
