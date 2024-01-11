import React, { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import {
    DrawerToggleButton,
    createDrawerNavigator,
} from "@react-navigation/drawer";

//Screens
import { CustomDrawer } from "./CustomDrawer";
import { ThemeContext } from "../auth/context/ThemeContex";

//Icons
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from  "@react-navigation/native-stack";

const Drawer  = createDrawerNavigator();

export const DrawerStack = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Drawer.Navigator
            drawerContent={({ navigation }) => (
                <CustomDrawer navigation={navigation} />
            )}
            screenOptions={{
                drawerPosition: "right",
                headerShown: false,
            }}
        >
        </Drawer.Navigator>
    );
};