import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../auth/context/ThemeContex";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { GradientTabIndicator } from "./GradientTabIndicator";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { colors } = theme;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: colors.background }}>
                <View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};