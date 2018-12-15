import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LandingPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Developer Platform</h1>
                  <p className="lead">
                    {" "}
                    Create your profile now!! and get help from other devs on
                    any issue
                  </p>
                  <hr />
                  <a href="#" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </a>
                  <a href="#" className="btn btn-lg btn-light">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
