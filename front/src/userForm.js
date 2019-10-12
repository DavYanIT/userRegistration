import React from 'react';
import {
  DatePicker,
  Form,
  Input,
  Select,
  Radio,
  Button,
} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

const { Option } = Select;

function UserForm({ handleSubmit, getFieldDecorator, initialValues={} }) {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };
  const {
    firstName,
    lastName,
    country,
    city,
    address,
    address2,
    legal,
    package: _package,
    birthdate,
  } = initialValues;

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="First Name">
        {getFieldDecorator('firstName', {
          rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
          initialValue: firstName,
        })(<Input placeholder="John" />)}
      </Form.Item>
      <Form.Item label="Last Name">
        {getFieldDecorator('lastName', {
          rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
          initialValue: lastName,
        })(<Input placeholder="Doe" />)}
      </Form.Item>
      <Form.Item label="Country">
        {getFieldDecorator('country', {
          rules: [{ required: true, message: 'Please input your country!', whitespace: true }],
          initialValue: country,
        })(<Input placeholder="U.S." />)}
      </Form.Item>
      <Form.Item label="City">
        {getFieldDecorator('city', {
          rules: [{ required: true, message: 'Please input your city!', whitespace: true }],
          initialValue: city,
        })(<Input placeholder="Alabama" />)}
      </Form.Item>
      <Form.Item label="Address">
        {getFieldDecorator('address', {
          rules: [{ required: true, message: 'Please input your address!', whitespace: true }],
          initialValue: address,
        })(<Input placeholder="Address line" />)}
      </Form.Item>
      <Form.Item label="Address 2">
        {getFieldDecorator('address2', { initialValue: address2 })(<Input placeholder="Address line 2" />)}
      </Form.Item>
      <Form.Item label="Legal" hasFeedback>
        {getFieldDecorator('legal', {
          rules: [{ required: true, message: 'Please select legal type!' }],
          initialValue: legal,
        })(
          <Select placeholder="Please select legal type">
            <Option value="Company">Company</Option>
            <Option value="Individual">Individual</Option>
          </Select>,
        )}
      </Form.Item>
      <Form.Item label="Package">
        {getFieldDecorator('package', {
          rules: [{ required: true, message: 'Please select package!' }],
          initialValue: _package,
        })(
          <Radio.Group>
            <Radio.Button value="Standard Package">Standard</Radio.Button>
            <Radio.Button value="Premium Package">Premium</Radio.Button>
          </Radio.Group>,
        )}
      </Form.Item>
      <Form.Item label="Birthdate">
        {getFieldDecorator('birthdate', {
          rules: [{ type: 'object', required: true, message: 'Please select time!' }],
          initialValue: birthdate ? moment(birthdate) : null,
        })(<DatePicker />)}
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserForm;
