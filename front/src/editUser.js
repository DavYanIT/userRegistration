import React, { useEffect, useState, Fragment } from 'react';
import { Form } from 'antd';
import UserForm from './userForm';
import { updateUser, getUser } from './actions';

function EditUser({ form, history, match }) {
  const [user, setUser] = useState(null);
  const { getFieldDecorator } = form;
  const { userId } = match.params;

  useEffect(() => {
    getUser(userId)
    .then((payload) => setUser(payload.data.user))
    .catch(error => console.error(error))
  }, [userId]);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, user) => {
      if (!err) {
        user._id = userId;
        updateUser(user)
        .then(() => history.push('/'))
        .catch(error => console.log(error))
      } else {
        console.log(err);
      }
    });
  };

  return (
    <Fragment>
      <h2>Edit a user</h2>
      <UserForm
        handleSubmit={handleSubmit}
        getFieldDecorator={getFieldDecorator}
        initialValues={{...user}}
      />
    </Fragment>
  );
}

export default Form.create({ name: 'EditUserForm' })(EditUser)
