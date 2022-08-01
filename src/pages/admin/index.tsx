import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AutoComplete from '../../core/AutoComplete';
import Button from '../../core/Button';
import { deleteData, getData } from '../../firebase/transportLayer';
import { user } from '../../interfaces/auth';
import Add from './Actions/Add';
import View from './Actions/View';
import styles from './styles.module.scss';

const Admin = () => {
	const [users, setUsers] = useState<any>([]);
	const [activeUser, setActiveUser] = useState<user>({ id: '', fullname: '', description: '', password: '' });

	const handleDeleteUser = () => {
		deleteData(activeUser.id).then(() => {
			toast.success('successfuly deleted', {
				position: 'top-right',
				autoClose: 5000,
			});
			getUsers();
		});
	};

	const getUsers = () => {
		getData().then((data) => {
			setUsers(data);
		});
	};

	useEffect(() => {
		getUsers();
	}, []);

	useEffect(() => {
		setActiveUser(users[0]);
	}, [users]);

	return (
		<div className={styles.admin}>
			<h1 className={styles.title}>Admin Panel</h1>
			{users ? (
				<>
					<h2 className={styles.subtitle}>Users</h2>
					<ul className={styles.users}>
						{users?.map((user: user, index: number) => (
							<li
								key={user.id}
								className={`${styles.user}${activeUser?.id === user?.id ? ` ${styles.activeUser}` : ''}`}
								onClick={() => setActiveUser(user)}>
								<span className={styles.userNumber}>{index + 1}</span>
								{user.fullname}
							</li>
						))}
					</ul>
				</>
			) : null}
			<AutoComplete users={users} />
			{activeUser ? (
				<div className={styles.actions}>
					<View activeUser={activeUser} />
					<Button handleClick={handleDeleteUser}>Delete</Button>
					<Add getUsers={getUsers} />
				</div>
			) : null}
		</div>
	);
};

export default Admin;
