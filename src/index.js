import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import All from './Components/All';
import Projects from './Components/Projects';
import AIAssistant from './Components/AIAssistant';
import Achivments from './Components/Achivments';

const App = () => {
  return (
    <>
      <Header />
      <hr className="-mt-3"></hr>
      <Outlet />
    </>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <All />
      },
      {
        path: "skill",
        element: <Skills />
      },
      {
        path: "project",
        element: <Projects />
      },
      {
        path: "achivements",
        element: <Achivments />
      },
      {
        path: "aiAssistant",
        element: <AIAssistant />
      },
    ]
  },

])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

