import React, { useState } from "react";
import PrimaryInput from "../../components/input/PrimaryInput";
import PrimaryButton from "../../components/button/PrimaryButton";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    setIsLoading(true);
    // Example API response

    setTimeout(() => {
        const response = {
          user: {
            id: "1",
            name: "Shedrack",
            email: "shedrack@gmail.com",
          },
          token: "jwt_token_here",
        };
        toast.success("Sign up successful");
        login(response.user, response.token);
    }, 3000);
  };

  return (
    <div className=" m-auto bg-white border border-gray-200 mt-20 rounded-xl shadow-2xs w-full max-w-100">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?
            <Link
              to={"/sign-in"}
              className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
              href="../examples/html/signin.html"
            >
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg
              className="w-4 h-auto"
              width="46"
              height="47"
              viewBox="0 0 46 47"
              fill="none"
            >
              <path
                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                fill="#4285F4"
              />
              <path
                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                fill="#34A853"
              />
              <path
                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                fill="#FBBC05"
              />
              <path
                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                fill="#EB4335"
              />
            </svg>
            Sign up with Google
          </button>

          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
            Or
          </div>

          {/* Form */}
          <form>
            <div className="grid gap-y-4">
              <PrimaryInput
                name="fullname"
                type="text"
                placeholder="Joun doe"
                label="Fullname"
              />
              <PrimaryInput
                name="email"
                type="text"
                placeholder="email"
                label="Email address"
              />
              <PrimaryInput
                name="password"
                type="text"
                placeholder="password"
                label="Password"
              />

              {/* Checkbox */}
              <div className="flex items-center">
                <div className="flex">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ms-3">
                  <label htmlFor="remember-me" className="text-sm">
                    I accept the{" "}
                    <a
                      className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              {/* End Checkbox */}

              <PrimaryButton
                isLoading={isLoading}
                onClick={handleLogin}
                text="Sign up"
                type="button"
              />
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
