import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AppStateStatus, Platform } from "react-native";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { MenuProvider } from "react-native-popup-menu";

import { AuthContext, AuthProvider } from "../src/auth/context/AuthContext";
import { ThemeContext, ThemeProvider } from "../src/auth/context/ThemeContex";
import { AuthStack } from "../src/navigation/AuthStack";

interface Props {
    children: React.ReactNode;
}

export default function App({ children }: Props) {
    const { state } = useContext(AuthContext);

    const quertClient = new QueryClient();

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <QueryClientProvider client={quertClient}>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}