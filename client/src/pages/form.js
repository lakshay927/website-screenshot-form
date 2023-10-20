import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PageForm = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const initialValues = { name: "", email: "", websiteURL: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required*"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required*"),
    websiteURL: Yup.string()
      .url("Invalid URL format use https://")
      .required("Website URL is required*"),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post(apiUrl + "/api/users/form", values)
      .then((res) => {
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="antialiased w-full bg-gradient-to-br from-green-100 to-white">
      <div className="container px-5 mx-auto">
        <div className="flex h-screen justify-center items-center">
          <div className="w-full md:w-[65%] mx-auto">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                  Entry
                </h2>
                <Form className="w-full">
                  <div className="flex flex-col w-full my-5">
                    <label htmlFor="name" className="text-gray-500 mb-2">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Please insert your name"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex flex-col w-full my-5">
                    <label htmlFor="email" className="text-gray-500 mb-2">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Please insert your email"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex flex-col w-full my-5">
                    <label htmlFor="websiteURL" className="text-gray-500 mb-2">
                      Website URL
                    </label>
                    <Field
                      type="text"
                      id="websiteURL"
                      name="websiteURL"
                      placeholder="Please insert your website URL"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                    <ErrorMessage
                      name="websiteURL"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex flex-col w-full my-5">
                    <button
                      type="submit"
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
                </Form>
              </div>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageForm;
