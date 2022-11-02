import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import { fetchUsers } from '../features/users/usersSlice';
import Loading from '../components/List/Loading';
import Error from '../components/List/Error';
import { ListContainer, ListItemsHeader } from '../components/List/listElements';
import UsersList from '../components/List/UsersList';

const Users: FC = () => {
	const usersState = useSelector((state: RootState) => state.users);
	const { error, loading, users } = usersState;

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const getUsers = async () => {
			if (!users) {
				dispatch(fetchUsers());
			}
		};

		getUsers();
	}, [users]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
		<ListContainer>
			<ListItemsHeader>
				<h2>Users ({users?.length})</h2>
			</ListItemsHeader>

			{users && <UsersList users={users} />}
		</ListContainer>
	);
};

export default Users;
