import React, { createContext, useEffect, useState } from 'react';
import { app } from '../utilities/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { privateGet, publicPost } from '../utilities/apiCaller';


export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [role,setRole]=useState(null);


    const SignUpuser=(email,password)=>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInuser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    const updateUser=(displayName, photo)=>{
        const photoURL= photo===""? "https://srcwap.com/wp-content/uploads/2022/08/no-avatar.webp" : photo;
        setLoading(true);
        
        return updateProfile(auth.currentUser,{displayName, photoURL})

    }

    const resetPassword=(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email)
    }


    const userSignout=()=>{
        return signOut(auth);

    }


    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,loggeduser=>{
            setUser(loggeduser);
           

            if(user) {
                publicPost('/jwt',{ email: loggeduser.email})
                .then(data=>{

                    
                    localStorage.setItem('dance-flow-token',data.token)
                })

                privateGet(`/role/${user?.email}`).then(res=>setRole(res.role))
            }
            else {
                localStorage.removeItem('dance-flow-token');
            }



            setLoading(false);
        });

        return ()=>{
            unsubscribe();
       }
    })
   

    const authInfo= {
        user,
        loading,
        SignUpuser,
        updateUser,
        signInuser,
        googleSignin,
        githubSignin,
        resetPassword,
        userSignout,
        setLoading,
        role,



    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;