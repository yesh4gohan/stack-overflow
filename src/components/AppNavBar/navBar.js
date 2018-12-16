import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {loader,logout} from "../../actions";
import {Button} from "react-bootstrap";
class NavBar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  constructor(props){
    super(props);
    console.log(this.props);
  }

  logout = async () => {
    this.props.loader(true);
    await this.props.logout(false);
    this.props.history.push("/login");
    this.props.loader(false);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <a className="navbar-brand" href="/">
              DevPlatform
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search your issue here"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </ul>

              {!this.props.auth ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li className="nav-item">
                  <Button bsStyle="danger" onClick = {this.logout}>Logout</Button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  loader,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
