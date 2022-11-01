import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Users: FC = () => {
	const users = useSelector((state: RootState) => state.users);

	return <div>Users</div>;
};

export default Users;
