import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import Mapa from "../screens/Mapa";
import Dashboard from "../screens/Dashboard";
<<<<<<< HEAD
import FooterApp from "../components/FooterApps";
=======
import FooterApp from "../components/line"; // Importe seu componente FooterApp aqui

>>>>>>> fb82736a45fc5915e719e7996bf378240db81860

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const [showFooter, setShowFooter] = useState(true);

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
          })}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              setShowFooter(true);
            },
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
          })}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              setShowFooter(false);
            },
          })}
        />
      </Tab.Navigator>
      {showFooter && <FooterApp />}
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
