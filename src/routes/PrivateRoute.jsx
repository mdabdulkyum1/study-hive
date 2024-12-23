import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute(props) {
  const { children } = props || {};

  const { user, loading } = useAuth();
  const location = useLocation();

  if(loading){
    return (
      <>
        <div className="flex justify-center items-center min-h-[50vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </>
    );
  }

  if(!user){
    <Navigate to={'/login'} state={location.pathname}></Navigate>
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
