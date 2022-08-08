import React, { Component } from "react";
import Input from "./common/input";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  validate = (input) => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is Required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is Required";
    }

    return Object.keys.length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the Server
    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim === "") return "Username is Required";
    }
    if (name === "password") {
      if (value.trim === "") return "Password is Required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-header">
                <h1 className="text-center">Login</h1>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <Input
                    name="username"
                    value={account.username}
                    onChange={this.handleChange}
                    label="Username"
                    type="text"
                    error={errors.username}
                  />
                  <Input
                    name="password"
                    value={account.password}
                    onChange={this.handleChange}
                    label="Password"
                    type="password"
                    error={errors.password}
                  />
                  <div className="text-center">
                    <button className="btn btn-primary">Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
