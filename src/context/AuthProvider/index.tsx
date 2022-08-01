import { useState } from 'react';
import { user } from '../../interfaces/auth';
import authProvider from '../../utils/authProvider';
import AuthContext from '../AuthContext';

const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const [user, setUser] = useState<user | null>(null);

	const signin = (newUser: user, callback: VoidFunction) => {
		return authProvider.signin(() => {
			setUser(newUser);
			callback();
		});
	};

	const signout = (callback: VoidFunction) => {
		return authProvider.signout(() => {
			setUser(null);
			callback();
		});
	};

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
