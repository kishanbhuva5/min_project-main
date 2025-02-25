import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import React from "react";
import User from "./components/User";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
// import Github, { githubInfoLoader } from "./components/Github.jsx";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        // {
        //   loader: githubInfoLoader,
        //   path: "/github",
        //   element: <Github />,
        // },
        {
          path: "/user/:id",
          element: <User />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //     <Route path='/' element={<Layout />}>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/about' element={<About/>}/>
  //       <Route path='/contact' element={<Contact/>}/>
  //       <Route path='/github' element={<h1>Github</h1>}/>
  //     </Route>
  //     <Route path='/login' element={<Login/>}/>
  //     </>
  //   )
  // )

  return <RouterProvider router={router} />;
};

export default App;
