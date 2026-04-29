import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/layout"
import summary from "../modules/summary"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "pods",
        // element: <PodsPage />,
      },
      {
        path: "deployments",
        // element: <DeploymentsPage />,
      },
    ],
  },
]);