import React, { Fragment } from 'react';
import { Form } from 'antd';
import UserForm from './userForm';
import { createUser } from './actions';

function Registration({ form, history }) {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, user) => {
      if (!err) {
        createUser(user)
        .then(() => {
          history.push('/')
        });
      } else {
        console.log(err);
      }
    });
  };

  return (
    <Fragment>
      <h2>Register a user</h2>
      <UserForm
        handleSubmit={handleSubmit}
        getFieldDecorator={getFieldDecorator}
      />
    </Fragment>
  );
}

export default Form.create({ name: 'RegistrationForm' })(Registration)
