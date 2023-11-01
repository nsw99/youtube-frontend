import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import Create from "./pages/Create";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "watch/:id",
        element: <Watch />,
      },

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/create",
    element: <Create />
  },
]);

export default router;
