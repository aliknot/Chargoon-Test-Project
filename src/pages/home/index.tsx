import { Link } from 'react-router-dom';
import routes from '../../routes';
import styles from './styles.module.scss';

const Home = () => {
	return (
		<div className={styles.home}>
			<h1 className={styles.title}>This is my simple admin react project</h1>
			<Link className={styles.link} to={routes.admin}>
				Go to admin
			</Link>
		</div>
	);
};

export default Home;
