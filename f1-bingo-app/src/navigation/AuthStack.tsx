import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext, useEffect, useState } from "react";
import { CustomDrawer } from "./CustomDrawer";

//Context
import { AuthContext } from "../auth/context/AuthContext";
import { ThemeContext } from "../auth/context/ThemeContex";

//Screens
import { NavigationContainer } from "@react-navigation/native";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { TabNavigator } from "./TabNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface Props {
    children: React.ReactNode;
}

const Drawer = createDrawerNavigator();

export const AuthStack = () => {
    const { state, setState } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { colors } = theme;
    const { tabBar, drawer } = colors;

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={({ navigation }) => (
                        <CustomDrawer navigation={navigation} />
                    )}
                    screenOptions={{
                        drawerPosition: "right",
                        headerShown: false,
                        drawerStyle: {
                            backgroundColor: colors.primary,
                        },
                    }}
                >
                {state.isLoggedIn ? (
                    <Drawer.Screen
                        name="Tab Navigator"
                        component={TabNavigator}
                        options={{ headerShown: false }}
                    />
                ) : (
                <>
                    <Drawer.Screen
                        name="Sign in"
                        component={SignInScreen}
                        options={{ headerShown: false }}
                    />
                    <Drawer.Screen
                        name="Sign up"
                        component={SignUpScreen}
                        options={{ headerShown: false }}
                    />
                </>
                )}
            </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    );
};