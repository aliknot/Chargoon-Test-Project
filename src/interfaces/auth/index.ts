export interface user {
	id: string;
	fullname: string;
	password: string;
	description: string;
}

export interface AuthContextType {
	user: any;
	signin: (user: user, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}
