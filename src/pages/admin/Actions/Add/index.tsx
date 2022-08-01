import { useState } from 'react';
import { insertData } from '../../../../firebase/transportLayer';
import Button from '../../../../core/Button';
import Label from '../../../../core/Label';
import Modal from '../../../../core/Modal';
import styles from './styles.module.scss';
import Input from '../../../../core/Input';

interface AddProps {
	getUsers: () => void;
}

const Add = ({ getUsers }: AddProps) => {
	const [isAddModalShown, setIsAddModalShown] = useState<boolean>(false);
	const [fullname, setFullname] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	const handleInsertData = () => {
		const insertDataTemp = { fullname, password, description };
		insertData(insertDataTemp).then(() => {
			setIsAddModalShown(false);
			getUsers();
		});
	};

	return (
		<>
			<Button handleClick={() => setIsAddModalShown(true)}>Add</Button>
			<Modal isShown={isAddModalShown} handleClose={() => setIsAddModalShown(false)}>
				<h2 className={styles.subtitle}>Add</h2>
				<Input
					handleChange={(event) => setFullname(event.target.value)}
					inputValue={fullname}
					type='text'
					label={<Label>Fullname: </Label>}
				/>
				<Input
					handleChange={(event) => setPassword(event.target.value)}
					inputValue={password}
					type='password'
					label={<Label>Password: </Label>}
				/>
				<Input
					handleChange={(event) => setDescription(event.target.value)}
					inputValue={description}
					type='textarea'
					label={<Label>Description: </Label>}
				/>
				<div className={styles.modalActions}>
					<Button handleClick={() => setIsAddModalShown(false)}>Close</Button>
					<Button handleClick={handleInsertData}>Save</Button>
				</div>
			</Modal>
		</>
	);
};

export default Add;
