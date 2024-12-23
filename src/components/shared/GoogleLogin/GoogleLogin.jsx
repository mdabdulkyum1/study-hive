import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {createUserWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleGoogleLogin = () => {
        createUserWithGoogle()
        .then((result) => {
              if(result.user){
                   navigate(location?.state ? location.state : "/");
              }
          }).catch((error) => {
            throw(error);
          });
        
      };
    

    return (
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center py-2 px-4 bg-gray-100 border border-gray-300 text-gray-700 font-bold rounded-md hover:bg-gray-200 transition"
        >
          <FcGoogle className="mr-2 text-2xl" />
          Continue with Google
        </button>

    );
};

export default GoogleLogin;