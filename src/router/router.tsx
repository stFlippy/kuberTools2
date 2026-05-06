import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/layout"
import Summary from "../modules/Summary"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "Clusters info",
         element: <Summary />,
      },
      // {
      //   path: "deployments",
      //   // element: <DeploymentsPage />,
      // },
    ],
  },
]);