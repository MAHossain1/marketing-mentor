import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUserAlt, IconName } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch(e => console.error(e));
  };

  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              {user?.uid ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-success"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">MarketingMentor</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            {user?.uid ? (
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-success"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label
          className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-info"
          data-tip={user?.displayName}
        >
          <div className="w-10 rounded-full">
            {user?.uid ? (
              <img src={user?.photoURL} alt="" />
            ) : (
              <p className="text-3xl pl-2 pt-1">
                <FaUserAlt />
              </p>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Header;
