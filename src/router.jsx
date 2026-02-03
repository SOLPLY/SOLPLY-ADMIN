import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";

import { Login } from "./pages/login/Login";
import { Town } from "./pages/town/Town";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "town", element: <Town /> },
      { path: "", element: <Login /> },
    ],
  },
]);
