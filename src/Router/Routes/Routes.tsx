import { RouteObject, useRoutes } from "react-router-dom";
import { Dashboard, NotFound } from "../../Components";
import { routerMapping } from "./routers-mapping";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: Object.entries(routerMapping).reduce<RouteObject[]>(
        (first: any, [path, router]: any) => [
          ...first,
          { element: router.component, path: path },
        ],
        []
      ),
    },
    { path: "*", element: <NotFound /> },
  ]);
};
