import { LabelProps } from '../../interfaces/core';
import styles from './styles.module.scss';

const Label = ({ children }: LabelProps) => {
	return <label className={styles.label}>{children}</label>;
};

export default Label;
