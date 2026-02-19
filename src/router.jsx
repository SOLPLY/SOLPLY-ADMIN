import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";

import { Login } from "./pages/login/Login";
import Basic from "./pages/BasicStructure/Basic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <Login /> },
      { path: "basic", element: <Basic /> },
    ],
  },
]);
