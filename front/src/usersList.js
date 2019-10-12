import React, { useEffect, useState, Fragment } from 'react';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from './actions';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
    .then(payload => {
      setUsers(payload.data.users);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Fragment>
      <h2>Users</h2>
      <Button type="primary" size="large"><Link to="/register">Register a User</Link></Button>
      <List
        size="large"
        dataSource={users}
        renderItem={user => (
          <List.Item
            actions={[
              <Link to={`/edit/${user._id}`}>edit</Link>,
              <Button type="danger" onClick={async () => {
                try {
                  await deleteUser(user._id);
                  const payload = await getUsers();
                  setUsers(payload.data.users);
                } catch (error) {
                  console.error(error);
                }
              }}>delete</Button>
            ]}
          >
            <List.Item.Meta
              title={`${user.firstName} ${user.lastName}`}
              description={
                <div>
                    {user.legal}&nbsp;:&nbsp;
                    {user.package}&nbsp;:&nbsp;
                  Lives in {user.country}, {user.city}, {user.address}{user.address2 ? `, ${user.address2}` : ''}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Fragment>
  );
}

export default UsersList
