import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(fullName, email, password, photoURL);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setError("");
        form.reset();
        handleUpdateUserProfile(fullName, photoURL);
        console.log(user);
      })
      .catch(error => setError(error.message));
  };

  const handleUpdateUserProfile = (fullName, photoURL) => {
    const profile = {
      displayName: fullName,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch(e => console.error(e));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo link"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                Already have an account?
                <Link to="/login" className="label-text-alt link link-hover">
                  please Login
                </Link>
              </label>
            </div>

            <p className="text-danger">{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          {/* <div className="form-control m-6 mt-0">
          <button className="btn btn-outline btn-success">
            Login with Google
          </button>
          <button className="btn btn-outline btn-success mt-2">
            Login with Github
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
