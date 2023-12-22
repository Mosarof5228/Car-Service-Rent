import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./src/providers/AuthProviders";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center mt-[50%]">
            <span className="loading loading-dots mt-[50%] loading-lg"></span>
        </div>
    }

    if (user?.email) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;