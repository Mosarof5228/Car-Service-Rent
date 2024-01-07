import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./src/providers/AuthProviders";



const PrivetRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center mt-[50%]">
            <span className="loading loading-dots mt-[50%] loading-lg"></span>
        </div>
    }

    if (user?.email) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivetRoute;

