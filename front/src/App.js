import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import EditUser from './editUser';
import Registration from './register';
import UsersList from './usersList';
import { Row, Col } from 'antd';

function App() {
  return (
    <Router>
      <Row>
        <Col span={16} offset={4}>
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route path="/register" component={Registration} />
            <Route path="/edit/:userId" component={EditUser} />
            <Route exact path="**" component={UsersList} />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
