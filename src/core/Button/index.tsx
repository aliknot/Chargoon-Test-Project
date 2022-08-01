import { ButtonProps } from '../../interfaces/core';
import styles from './style.module.scss';

const Button = ({ className = '', children, handleClick, type = 'submit', isDisabled }: ButtonProps) => {
	return (
		<button
			className={`${styles.button}${className ? ` ${className}` : ''}`}
			onClick={handleClick}
			type={type}
			disabled={isDisabled}>
			{children}
		</button>
	);
};

export default Button;
