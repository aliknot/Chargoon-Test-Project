import { FormProps } from '../../interfaces/core';
import styles from './styles.module.scss';

const Form = ({ className = '', onSubmit, children, isEnterDisabled = false }: FormProps) => {
	return (
		<form
			className={`${styles.form}${className ? ` ${className}` : ''}`}
			onSubmit={(event) => {
				onSubmit(event);
				event.preventDefault();
			}}
			onKeyDown={(event) => {
				if (isEnterDisabled && event.key === 'Enter') event.preventDefault();
			}}
			children={children}
		/>
	);
};

export default Form;
