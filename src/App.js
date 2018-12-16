import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/landingPage";
import NavBar from "./components/AppNavBar/navBar";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Amplify from "aws-amplify";
import config from "./config/config";
import {connect} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});
class App extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          {this.props.auth?<NavBar />:null}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={LandingPage} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth:state.auth.auth
});

export default connect(mapStateToProps,null)(App);
