import { FC } from 'react';
import { UsersListProps } from '../../assets/interfaces';
import { ListItemSection, ListItem } from './listElements';

const UsersList: FC<UsersListProps> = ({ users }) => {
	return (
		<>
			{users?.map((user, i: number) => (
				<ListItem key={user.id + i}>
					<h2>User {i + 1}</h2>

					<ListItemSection>
						<p>Name</p>
						<p>{user.name}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Username</p>
						<p>{user.username}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Email</p>
						<p>{user.email}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Address</p>
						<p>
							{`${user.address.street}
        ${user.address.suite} 
        ${user.address.city} 
        ${user.address.zipcode}`}
						</p>
					</ListItemSection>

					<ListItemSection>
						<p>Phone</p>
						<p>{user.phone}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Website</p>
						<p>{user.website}</p>
					</ListItemSection>
				</ListItem>
			))}
		</>
	);
};

export default UsersList;
