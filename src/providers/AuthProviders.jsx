
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext } from 'react'
import { auth } from './../firebase/firebase.init';

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

function AuthProviders({ children }) {


    const createUser = () => {
          
    }
    const handelGoogleLogin = () => {
      return signInWithPopup(auth, provider)
    }

    const authInfo = {
      createUser,
      handelGoogleLogin
    }
  return (
    <AuthContext.Provider value={authInfo}> 
        {children}
    </AuthContext.Provider>
  )
}
AuthProviders.propTypes = {
    children: PropTypes.none,
}

export default AuthProviders
