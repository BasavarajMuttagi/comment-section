import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
export default routes;
