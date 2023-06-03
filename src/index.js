import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import ChooseTest from './Pages/ChooseTest';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import ReviewAssissment from './Pages/ReviewAssissment';
import CloseAssessment from './Pages/CloseAssessment';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />
    ),
  },
  {
    path: "/choose-test",
    element: <ChooseTest />
  },
  {
    path: "/review-assissment",
    element: <ReviewAssissment />
  },
  {
    path: "/close-assissment",
    element: <CloseAssessment />
  },
]);


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);