import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    let from = location.state?.from?.pathname || "/";

    // login using email and password
    loginUser(email, password)
      .then(result => {
        const user = result.user;
        toast.success("user logged in successfully");
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch(e => console.error(e));
  };

  // login with google
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {})
      .catch(e => console.error(e));
  };

  // login with github
  const handleGithub = () => {
    githubSignIn()
      .then(() => {})
      .catch(e => console.error(e));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  New to this Site? please Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control m-6 mt-0">
            <button
              onClick={handleGoogle}
              className="btn btn-outline btn-success"
            >
              Login with Google
            </button>
            <button
              onClick={handleGithub}
              className="btn btn-outline btn-success mt-2"
            >
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
