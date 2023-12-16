import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./src/pages/Home/Home/Home";
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
      }
    ]
  },
]);

export default router;