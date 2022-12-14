import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from 'util/token'

const RouteAuthProvider = ({ children, isProtected, path }) => {
    const navigate = useNavigate();
    let token = getToken();


    useEffect(() => {
        if (isProtected && !token) {
            navigate("/");
        } else if (path === "/" && token) {
            navigate("/dashboard");
        }
    }, [isProtected, token])


    return (
        children
    )
}

export default RouteAuthProvider