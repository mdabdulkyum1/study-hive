import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import registerAnim from "../../../public/lottie/register.json";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/shared/GoogleLogin/GoogleLogin";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");

  const { createUser, profileUpdate, setUser } = useAuth();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handelRegister = async (e) => {
    e.preventDefault();

    setErr("");

    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    const name = formObject.name;
    const email = formObject.email;
    const photo = formObject.photo;
    const password = formObject.password;

    if (password.length < 6) {
      setErr("Password must be at least 6 characters!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErr("Password must have an Uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErr("Password must have a Lowercase letter!");
      return;
    }

    try {
      const result = await createUser(email, password);
      await profileUpdate(name, photo);
      setUser({ ...result.user, displayName: name, photoURL: photo });
      form.reset();
      navigate("/");
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Register successfully!",
      });
    } catch (error) {
      Swal.fire({ title: "Error!", icon: "error", text: `${error.message}` });
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title> Register | Study Hive</title>
      </Helmet>
      
      <div className="hero min-h-screen bg-light-bg dark:bg-dark-bg">
  <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 px-4 sm:px-8 lg:px-16">
    {/* Right-Side Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <Lottie animationData={registerAnim} loop={true} className="max-w-xs sm:max-w-sm lg:max-w-lg" />
    </div>

    {/* Left-Side Register Form */}
    <div className="w-full lg:w-1/2 bg-light-bg dark:bg-dark-bg shadow-2xl rounded-lg p-6 sm:p-8 lg:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text text-center my-4">
        Register Now!
      </h1>
      <form onSubmit={handelRegister} className="space-y-6">
        {/* Name Input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-light-text dark:text-dark-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="input input-bordered bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text w-full"
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-light-text dark:text-dark-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text w-full"
            required
          />
        </div>

        {/* Photo Input */}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-light-text dark:text-dark-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter your Photo URL"
            className="input input-bordered bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text w-full pr-10"
            required
          />
        </div>

        {/* Password Input with Toggle */}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-light-text dark:text-dark-text">Password</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text w-full pr-10"
              required
            />
            {/* Toggle Button */}
            <div
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-light-text dark:text-dark-text"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {err && <p className="text-red-500 mt-1">{err}</p>}

        {/* Register Button */}
        <div className="form-control mt-6">
          <button className="btn bg-primary text-white w-full hover:bg-light-accent dark:hover:bg-dark-accent">
            Register
          </button>
        </div>

        <div className="divider">or</div>
        <div className="form-control mb-6">
          <GoogleLogin />
        </div>

        {/* Redirect to Login */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>


    </>
  );
};

export default Register;
