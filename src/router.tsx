import { Navigate, useRoutes } from "react-router"
import Cesar from "./pages/Cesar/Cesar"
import Layout from "./pages/Layout"
import Simple from "./pages/Simple/Simple"
import Thrimetius from "./pages/Thrimetius/Thrimetius"

const MyRouter = () => {
  const myRouter = useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Cesar />,
        },
        {
          path: "simple",
          element: <Simple />,
        },
        {
          path: "thriterium",
          element: <Thrimetius />,
        },
      ],
    },

    {
      path: "*",
      element: <Navigate to="" />,
    },
  ])
  return myRouter
}
export default MyRouter
