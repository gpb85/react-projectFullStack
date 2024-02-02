import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="topHeader">
          <div className="topHeaderLogo">
            <h3>topHeaderLogo</h3>
          </div>
          <div className="logbox">
            <div className="signLink" id="signInLink">
              <a className="customSignLinks" href="#">
                Sign In
              </a>
            </div>
            <div className="signLink">
              <a className="customSignLinks" id="signUpLink" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="headerNavbar">
          <div className="navbar">
            <Link className="navbarLinks" to="/">
              Home
            </Link>
            <Link className="navbarLinks" to="/about">
              About
            </Link>
            <Link className="navbarLinks" to="/events">
              Events
            </Link>
            <Link className="navbarLinks" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="bottomHeader"></div>
      </div>
    </>
  );
};

export default Navbar;
