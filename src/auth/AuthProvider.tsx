import React, { createContext, useState } from 'react'

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

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<userVIew | null>(null);
    function login(user: userVIew) {
        if(user.email == "Venna" && user.password == "def")
        {
            setUser(() => ({
                firstName: "venna",
                lastName: "chandra ",
                email: "abc",
                password: "ddf",
            }));
        }
    }
    function logout() {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}