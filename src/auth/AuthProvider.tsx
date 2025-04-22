import React, { createContext, useEffect, useState } from 'react'
import * as keyChain from 'react-native-keychain';
interface userVIew {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface AuthContextType {
    userData: userVIew | null;
    login: (user: userVIew) =>void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

import { ReactNode } from 'react';
import { Alert } from 'react-native';

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<userVIew | null>(null);
    const [token,setToken] = useState("");
    let getUserData = async () => {
        try
        {
            const creds = await keyChain.getGenericPassword();
            if(creds) {
                setToken(creds.password);
                setUser(() => ({
                    firstName: "venna",
                    lastName: "chandra ",
                    email: "abc",
                    password: "",
                }));
            }
        }
        catch(err) {
            Alert.alert("Failed to load token");
        }
    }
    useEffect(()=> {
        getUserData();
    },[]);
    let login = async (user: userVIew) => {
        try
        { 
            if(user.email == "Venna" && user.password == "def")
            {
                await keyChain.setGenericPassword("auth","dummyToken");
                getUserData();
            }
            else
            {
                Alert.alert("login failed");
            }
        }
        catch(err) {
            Alert.alert("Login failed");
        }
    }
    let logout = async () => {
        try
        {
            setToken("");
            setUser(null);
            await keyChain.resetGenericPassword();
        }
        catch(err) {
            Alert.alert(String(err));
        }
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}