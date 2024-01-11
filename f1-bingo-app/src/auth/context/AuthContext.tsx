import React, {createContext, useState} from "react";
import { useReducer } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import UserModel from "../Server/models/UsersModel";
//import { Events, Places } from "../components/Types";
import { QueryClient, useQuery } from "@tanstack/react-query";

interface Props {
    children: React.ReactNode;
}

interface Contex {
    state: State;
    setState: (state: State) => void;
}

interface State {
    user: User;
    isLoggedIn: Boolean;
}

interface User {

}

export const defaultContextState: State = {
    user: {

    },
    isLoggedIn: false,
};

export const AuthContext = createContext<Contex>({
    state: defaultContextState,
    setState: (state) => {},
});

export const AuthProvider = ({ children }: Props) => {
    const [state, setState] = userState<State>(defaultContextState);

    return(
        <SafeAreaProvider>
            <AuthContext.Provider value={{ state, setState }}>
                {children}
            </AuthContext.Provider>
        </SafeAreaProvider>
    );
}