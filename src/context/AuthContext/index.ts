import { createContext } from 'react';
import { AuthContextType } from '../../interfaces/auth';

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;
