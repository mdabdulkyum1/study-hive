import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase/firebase.init";
import axios from "axios";


export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //     console.log("User >>-",currentUser);
     
  //     if(currentUser?.email){
  //       const user = {email: currentUser?.email};
  
  //       axios.post(`${import.meta.env.VITE_server_url}/jwt`, user, {withCredentials: true})
  //       .then(data=> {
  //       })
        
  //     }else{
  //       axios.post(`${import.meta.env.VITE_server_url}/logout`, {}, {withCredentials: true})
  //       .then(data=> {
  //       })
  //     }


      
  //   });

  //   return () => unsubscribe();
  // }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser); // Update user state
      setLoading(false); // Stop loading once the user state is determined
  
      try {
        if (currentUser?.email) {
          // If user is logged in, send their email to the server
          const user = { email: currentUser.email };
          await axios.post(
            `${import.meta.env.VITE_server_url}/jwt`,
            user,
            { withCredentials: true }
          );
        } else {
          // If user is logged out, call the logout endpoint
          await axios.post(
            `${import.meta.env.VITE_server_url}/logout`,
            {},
            { withCredentials: true }
          );
        }
      } catch (error) {
        console.error("Error in API call:", error.message);
      }
    });
  
    // Cleanup on unmount
    return () => unsubscribe();
  }, []);
  
  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    signUser,
    profileUpdate,
    createUserWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
AuthProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default AuthProviders;
