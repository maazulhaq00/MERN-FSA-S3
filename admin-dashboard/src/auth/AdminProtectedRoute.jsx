import { Navigate, useNavigate } from "react-router-dom";

function AdminProtectedRoute({ children }) {

    // let navigate = useNavigate()

    if(!localStorage.getItem("token") || localStorage.getItem("role") != "admin"){
        return <Navigate to="/login" replace/>;
    }

    return children;
}

export default AdminProtectedRoute;