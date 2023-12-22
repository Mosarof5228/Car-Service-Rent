import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "./Layout/Main";
import PrivetRoute from "./PrivetRoute";
import Checkout from "./src/pages/Checkout/Checkout";
import Home from "./src/pages/Home/Home/Home";
import MyBookings from "./src/pages/Home/MyBookings/MyBookings";
import Login from "./src/pages/Login/Login";
import Signup from "./src/pages/SignUp/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <Signup></Signup>
      },
      {
        path: '/chekout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/myBookings',
        element: <PrivetRoute><MyBookings></MyBookings></PrivetRoute>
      }
    ]
  },
]);

export default router;