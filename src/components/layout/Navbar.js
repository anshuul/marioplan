import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;
  console.log(props);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3 navbar-fixed">
        <div className="container left-align">
          <Link to="/" className="brand-logo" style={{ left: "20%" }}>
            MarioPlan
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
