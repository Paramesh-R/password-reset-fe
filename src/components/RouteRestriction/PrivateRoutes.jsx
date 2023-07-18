import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    const [cookies] = useCookies([]);
    
    function isTokenExpired() {

        if (!cookies) return false;

        if (cookies.token) {
            const decodedToken = jwtDecode(cookies.token);
            return decodedToken.exp < (Date.now() / 1000);
        } else {
            return false;
        }
    }
    
    return isTokenExpired() ? <Navigate to="/signIn" /> : <Outlet />
}

export default PrivateRoutes