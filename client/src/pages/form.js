import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const PageForm = () => {
  const initialValues = { name: "", email: "", websiteURL: "", imageURL: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    websiteURL: Yup.string()
      .url("Invalid URL format")
      .required("Website URL is required"),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null));
  };

  return (
    <div>
      <div className="antialiased bg-gradient-to-br from-green-100 to-white">
        <div className="container px-16 mx-auto">
          <div className="flex flex-col gap-10 md:flex-row h-screen justify-evenly md:items-center">
            <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
              <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                  Register
                </h2>
                <form action="" className="w-full">
                  <div id="input" className="flex flex-col w-full my-5">
                    <label for="username" className="text-gray-500 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Please insert your username"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" className="flex flex-col w-full my-5">
                    <label for="password" className="text-gray-500 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Please insert your password"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="button" className="flex flex-col w-full my-5">
                    <button
                      type="button"
                      className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                    >
                      <div className="flex flex-row items-center justify-center">
                        <div className="mr-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            ></path>
                          </svg>
                        </div>
                        <div className="font-bold">Submit</div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="text-5xl text-gray-800 font-bold">Client Area</h1>
              <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
                Control and monitorize your website data from dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageForm;
