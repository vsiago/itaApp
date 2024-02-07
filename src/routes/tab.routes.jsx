import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import Mapa from "../screens/Mapa";
import Dashboard from "../screens/Dashboard";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "darkred", // Cor do ícone quando ativo
        tabBarInactiveTintColor: "lightcoral", // Cor do ícone quando inativo
        tabBarLabelStyle: {
          display: "none", // Oculta o texto do label
        },
        tabBarStyle: {
          backgroundColor: "white", // Cor do fundo da barra de navegação inferior
          borderTopWidth: 1,
          borderTopColor: "lightgray",
        },
        tabBarActiveBackgroundColor: "#002D55", // Cor de fundo quando ativo
        tabBarInactiveBackgroundColor: "#003768", // Cor de fundo quando inativo
      }}
    >
      <Tab.Screen
        name="mapa"
        component={Mapa}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Feather
                name={focused ? "home" : "home"}
                color={focused ? "#fff" : "#AFC7DC"}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Feather
                name={focused ? "menu" : "menu"}
                color={focused ? "#fff" : "#AFC7DC"}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50, // Defina a altura desejada
  },
});
