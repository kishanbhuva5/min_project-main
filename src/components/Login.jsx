import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };
    console.log(data);
  };

  const handleClick = () => {
    if (name === "" || email === "" || password === "") {
      Error("Please fill all the fields");
      return;
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="shadow-lg box-border bg-gray-200 rounded-md h-96 w-md m-auto mt-30 ">
        <form
          className="p-6 flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h3 className="text-3xl text-center mb-5 text-gray-700 font-extrabold">
              Login Page
            </h3>
            <label htmlFor="name" className="hidden">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="password" className="hidden">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            onClick={handleClick}
            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 m-auto mt-8 rounded-lg mt-3 hover:bg-orange-800 transition ease-in-out duration-300 "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
