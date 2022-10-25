import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // google and github login 
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // Email and password login 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser);
          
        });

        return () => {
            unsubscribe();
        }

    }, [])

    // LogOut 
    const logOut = () => {
        return signOut(auth);
    }


    const authInfo = {
        user,
        providerLogin,
        createUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;