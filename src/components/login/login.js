import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import { connect } from "react-redux";
import { authenticate, loader } from "../../actions";
import { Auth } from "aws-amplify";
import Spinner from "../common/spinner";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      this.props.loader(true);
      const authData = await Auth.signIn(this.state.email, this.state.password);
      await this.props.authenticate(true);
      this.props.history.push("/");
      this.props.loader(false);
      //this.props.loadUserData(authData);
      //this.props.router.push("/");
    } catch (error) {
      console.log(error);
      this.props.authenticate(false);
      this.props.loader(false);
    }
  };

  render() {
    if (this.props.loaderState) {
      return <Spinner />;
    } else {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  loaderState: state.loader.loaderShow
});
const mapdispatchToProps = {
  authenticate,
  loader
};

export default connect(
  mapStateToProps,
  mapdispatchToProps
)(Login);
