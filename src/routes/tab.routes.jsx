import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

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
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: "white", // Cor do fundo da barra de navegação inferior
          borderTopWidth: 1,
          borderTopColor: "lightgray",
        },
        tabBarActiveBackgroundColor: "darkred", // Cor de fundo quando ativo
        tabBarInactiveBackgroundColor: "lightcoral", // Cor de fundo quando inativo
      }}
    >
      <Tab.Screen
        name="mapa"
        component={Mapa}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Feather
                name={focused ? "home" : "home"}
                color={focused ? "red" : "black"}
                size={size}
              />
            </View>
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Feather
                name={focused ? "menu" : "menu"}
                color={focused ? "red" : "black"}
                size={size}
              />
            </View>
          ),
          tabBarLabel: "Serviços",
        }}
      />
    </Tab.Navigator>
  );
}
