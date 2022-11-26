import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)//privete routes loading problem solve

    // Register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log In
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Sign Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // login হবার পরে অন্য পেজ এ যাওয়া
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unscribe();
        }
    }, []);

    // user name sate
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const authInfo = {
        createUser,
        logIn,
        logOut,
        user,
        updateUser,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;