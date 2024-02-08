import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import Mapa from "../screens/Mapa";
import Dashboard from "../screens/Dashboard";
import FooterApp from "../components/footerApps"; // Importe seu componente FooterApp aqui

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "darkred",
          tabBarInactiveTintColor: "lightcoral",
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarStyle: {
            backgroundColor: "white",
          },
          tabBarActiveBackgroundColor: "#002D55",
          tabBarInactiveBackgroundColor: "#003768",
        }}
      >
        <Tab.Screen
          name="mapa"
          component={Mapa}
          options={({ route }) => ({
            tabBarIcon: ({ size, focused }) => (
              <View style={styles.tabBarIconContainer}>
                <Feather
                  name={focused ? "home" : "home"}
                  color={focused ? "#fff" : "#AFC7DC"}
                  size={size}
                />
              </View>
            ),
            tabBarVisible: route.name !== 'dashboard', // Oculta o tabBar quando a rota for 'dashboard'
          })}
        />
        <Tab.Screen
          name="dashboard"
          component={Dashboard}
          options={({ route }) => ({
            tabBarIcon: ({ size, focused }) => (
              <View style={styles.tabBarIconContainer}>
                <Feather
                  name={focused ? "menu" : "menu"}
                  color={focused ? "#fff" : "#AFC7DC"}
                  size={size}
                />
              </View>
            ),
            tabBarVisible: route.name !== 'mapa', // Oculta o tabBar quando a rota for 'mapa'
          })}
        />
      </Tab.Navigator>
      {<FooterApp />}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    borderTopWidth: 1,
    borderTopColor: "#003768",
  },
});
