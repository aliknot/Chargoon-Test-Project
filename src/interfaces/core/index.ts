import { FormEvent, ReactNode, ChangeEvent } from 'react';

export interface FormProps {
	className?: string;
	onSubmit: (event: FormEvent) => void;
	children: ReactNode;
	isEnterDisabled?: boolean;
}

export interface ButtonProps {
	className?: string;
	children: ReactNode;
	handleClick?: () => void;
	type?: 'submit' | 'button' | 'reset';
	isDisabled?: boolean;
}

export interface InputProps {
	type: 'text' | 'password' | 'textarea';
	inputValue: string;
	handleChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
	label?: ReactNode;
	setIsFocused?: (isFocused: boolean) => void;
	className?: string;
}

export interface LabelProps {
	children: ReactNode;
}

export interface ModalProps {
	isShown: boolean;
	handleClose?: () => void;
	children: ReactNode;
}
