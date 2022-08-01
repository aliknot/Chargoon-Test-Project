import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../core/Button';
import Form from '../../core/Form';
import Input from '../../core/Input';
import Label from '../../core/Label';
import { getData } from '../../firebase/transportLayer';
import useAuth from '../../hooks/useAuth';
import { user } from '../../interfaces/auth';
import { locationState } from '../../interfaces/react-router-dom';

const Login = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const navigate = useNavigate();
	const location = useLocation();
	const auth = useAuth();
	const { from } = location.state as locationState;

	const handleFormSubmit = () => {
		getData().then((data: any) => {
			const user = data.find((user: user) => username === user.fullname && password === user.password);

			if (user) {
				auth.signin(user, () => navigate(from?.pathname || '/', { replace: true }));
			} else {
				toast.error('incorrect username or password', {
					position: 'top-right',
					autoClose: 5000,
				});
			}
		});
	};

	return (
		<Form onSubmit={handleFormSubmit}>
			<Input
				type='text'
				inputValue={username}
				handleChange={(event) => setUsername(event.target.value)}
				label={<Label>Username: </Label>}
			/>
			<Input
				type='password'
				inputValue={password}
				handleChange={(event) => setPassword(event.target.value)}
				label={<Label>Password: </Label>}
			/>
			<Button type='submit'>Login</Button>
		</Form>
	);
};

export default Login;
