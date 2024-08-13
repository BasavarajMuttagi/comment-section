import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
export default routes;
