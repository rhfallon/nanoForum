import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginForm extends Component {

    state = {
        value: "",
        loginId: "",
        loginPassword:"",
        usernameInput: "",
        userPasswordInput: "",
        loggedIn: ""
      };
    
      handleLoginChange = event => {
        event.preventDefault();
        this.setState({ loginId: event.target.value});
        console.log("Id::::::"+ this.state.loginId);
      };

      
      handlePasswordChange = event => {
        event.preventDefault();
        this.setState({ loginPassword: event.target.value});
        console.log("Password::::::"+ this.state.loginPassword);
      };

      
  submitLogin = event => {
    if (this.state.loginId === "bob" && this.state.loginPassword === "test") {
      this.setState({
        usernameInput: this.state.loginId,
        userPasswordInput: this.state.loginPassword,
        loggedIn: true
      });
    } else {
      alert("Wrong username or password. Please try again.");
    }
    event.preventDefault();
  };





    
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const usernameInput = this.state.usernameInput;
    
    return (
        // <h2>Hello{usernameInput}</h2>
      <Form 
      style={{
        visibility: !this.state.loggedIn ? "visible" : "hidden"
      }}
      onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              onChange={this.handleLoginChange}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}

            />,
          )}
        </Form.Item>
        <Form.Item

        >
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button onClick={this.submitLogin}type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}



export default Form.create()(LoginForm);