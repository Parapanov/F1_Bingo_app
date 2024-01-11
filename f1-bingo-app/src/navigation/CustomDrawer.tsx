import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext, defaultContextState } from "../auth/context/AuthContext";

//Context
import { CustomButton } from "../components/CustomButton";
import { ThemeContext } from "../auth/context/ThemeContex";

//Icons
import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";

interface Props {
    navigation: any;
}

export const CustomDrawer = ({ navigation }: Props) => {
    const { state, setState } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    const { colors } = theme;
    const { drawer } = colors;
  
    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                flex: 1,
                justifyContent: "space-between",
            }}
         >
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 10,
                    }}
                >
                    <Ionicons name="person" size={24} color={colors.text} />
                    <Text
                        style={{
                            fontSize: 28,
                            color: colors.text,
                            marginLeft: 15,
                        }}
                    >
                        Accont
                    </Text>
                </View>

                <CustomButton
                    title="Profile"
                    fontSize={20}
                    onPress={() => {}}
                    bgColor={colors.secondary}
                />

            </View>
         </DrawerContentScrollView>
    );
};