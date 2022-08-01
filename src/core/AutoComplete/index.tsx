import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Label from '../Label';
import styles from './styles.module.scss';

const AutoComplete = ({ users }: any) => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [suggestedUsers, setSuggestedUsers] = useState<any>([]);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	useEffect(() => {
		if (searchValue.length) {
			setSuggestedUsers(
				users.filter(({ fullname }: any) => fullname.toLocaleLowerCase().match(searchValue.toLocaleLowerCase())),
			);
		} else {
			setSuggestedUsers([]);
		}
	}, [searchValue, users]);

	return (
		<div className={styles.autoComplete}>
			<Input
				className={styles.input}
				type='text'
				handleChange={(event) => setSearchValue(event.target.value)}
				inputValue={searchValue}
				label={<Label>Auto Complete: </Label>}
				setIsFocused={setIsFocused}
			/>
			{isFocused ? (
				<div className={styles.users}>
					{suggestedUsers?.map((user: any) => (
						<Button className={styles.item} key={user.id} handleClick={() => setSearchValue(user.fullname)}>
							{user.fullname}
						</Button>
					))}
				</div>
			) : null}
		</div>
	);
};

export default AutoComplete;
