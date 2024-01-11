import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { DrawerStack } from "./DrawerStack";
import { useNavigation } from "@react-navigation/native";

//Context
import { ThemeContext } from "../auth/context/ThemeContex";
import { AuthContext } from "../auth/context/AuthContext";

//Screens


//Icons
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { TopTabNavigation } from "./TopTabNavigation";


const Tab = createBottomTabNavigator();

export const TabNavigator = () => {

    const { theme } = useContext(ThemeContext);
    const { state, setState } = useContext(AuthContext);
    const navigation = useNavigation<any>();
    const { colors } = theme;
    const { tabBar } = colors;

    return (
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarShowLabel: false,
            tabBarBackground: () => (
              <LinearGradient colors={tabBar} style={{ height: 70 }} />
            ),
            tabBarInactiveTintColor: "#51951a",
            tabBarActiveTintColor: "#294d0d",
          }}
        >
            <Tab.Screen
                name={state.user.userName}
                component={DrawerStack}
                options={{
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <Ionicons
                            name="settings-outline"
                            size={34}
                            color="black"
                            style={{ marginRight: 20 }}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};