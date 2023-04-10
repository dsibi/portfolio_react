import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { BoxPlot } from "./pages/BoxPlot";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        },
      {
        path: "box_plot",
        element: <BoxPlot />,
      },
    ],
  }
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
