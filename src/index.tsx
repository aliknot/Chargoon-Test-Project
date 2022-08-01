import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/RequireAuth';
import Home from './pages/home';
import Login from './pages/login';
import Admin from './pages/admin';
import reportWebVitals from './reportWebVitals';
import routes from './routes';
import AuthProvider from './context/AuthProvider';
import './scss/globals.scss';
import './scss/iransans-font.scss';
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
	<BrowserRouter>
		<AuthProvider>
			<div className='container'>
				<ToastContainer />
				<Routes>
					<Route
						path={routes.home}
						element={
							<RequireAuth>
								<Home />
							</RequireAuth>
						}
					/>
					<Route path={routes.login} element={<Login />} />
					<Route
						path={routes.admin}
						element={
							<RequireAuth>
								<Admin />
							</RequireAuth>
						}
					/>
				</Routes>
			</div>
		</AuthProvider>
	</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
