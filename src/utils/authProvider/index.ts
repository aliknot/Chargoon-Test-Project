const authProvider = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		authProvider.isAuthenticated = true;
		setTimeout(callback, 100);
	},
	signout(callback: VoidFunction) {
		authProvider.isAuthenticated = false;
		setTimeout(callback, 100);
	},
};

export default authProvider;
