import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputProps } from '../../interfaces/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import Button from '../Button';

const Input = ({ type, inputValue, handleChange, label, setIsFocused, className }: InputProps) => {
	const [showPassowrd, setShowPassword] = useState<boolean>(false);

	if (type === 'password') {
		return (
			<div className={styles.labelWrapper}>
				{label}
				<div className={styles.passwordWrapper}>
					<input
						className={styles.password}
						type={showPassowrd ? 'text' : 'password'}
						onChange={(event) => handleChange(event)}
						value={inputValue}
					/>
					{showPassowrd ? (
						<Button type='button' handleClick={() => setShowPassword(false)} className={styles.passwordVisibility}>
							<FontAwesomeIcon icon={faEyeSlash} />
						</Button>
					) : (
						<Button type='button' handleClick={() => setShowPassword(true)} className={styles.passwordVisibility}>
							<FontAwesomeIcon icon={faEye} />
						</Button>
					)}
				</div>
			</div>
		);
	}

	if (type === 'textarea') {
		return (
			<div className={styles.labelWrapper}>
				{label}
				<div className={styles.textareaWrapper}>
					<textarea cols={30} rows={4} value={inputValue} onChange={(event) => handleChange(event)} />
				</div>
			</div>
		);
	}

	return (
		<div className={styles.labelWrapper}>
			{label}
			<div className={`${styles.inputWrapper}${className ? ` ${className}` : ''}`}>
				<input
					className={styles.input}
					onChange={(event) => handleChange(event)}
					value={inputValue}
					onFocus={() => typeof setIsFocused !== 'undefined' && setIsFocused(true)}
					onBlur={() => typeof setIsFocused !== 'undefined' && setIsFocused(false)}
				/>
			</div>
		</div>
	);
};

export default Input;
