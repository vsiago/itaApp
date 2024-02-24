import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Mapa from "../screens/Mapa";
import Dashboard from "../screens/Prefeitura";
import Line from "../components/line";
import { useNavigation } from "@react-navigation/native";
import Places from "../screens/Places";


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const [showFooter, setShowFooter] = useState(true);

  // Navegar para a rota mapa
  const navigation = useNavigation();

  const openTabMap = (routeName) => {
    navigation.navigate(routeName);
  };

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
            backgroundColor: "",
            height: 100, // Adjust the height as needed (in pixels)
          },
          tabBarActiveBackgroundColor: "#2887DF",
          tabBarInactiveBackgroundColor: "#003768",
        }}
      >
        <Tab.Screen
          name="mapa"
          component={Mapa}
          options={({ route }) => ({
            tabBarIcon: ({ size, focused }) => null, // Oculta o ícone definindo como null
            tabBarButton: () => null, // Oculta o contêiner da guia
            tabBarStyle: {
              backgroundColor: '#c3c3', // Optional background color
              overflow: 'hidden', // Ensures rounded corners are displayed correctly
              height: 57, // Adjust the height as needed (in pixels)
            },
          })}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              setShowFooter(true);
            },
          })}
        />
        <Tab.Screen
          name="places"
          component={Places}
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
            tabBarStyle: {
              backgroundColor: '#c3c3', // Optional background color
              overflow: 'hidden', // Ensures rounded corners are displayed correctly
              height: 57, // Adjust the height as needed (in pixels)
            },
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
            tabBarStyle: {
              backgroundColor: '#c3c3', // Optional background color
              overflow: 'hidden', // Ensures rounded corners are displayed correctly
              height: 57, // Adjust the height as needed (in pixels)
            },
          })}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              setShowFooter(false);
            },
          })}
        />
      </Tab.Navigator>
      {showFooter && ''}
      <TouchableOpacity style={styles.buttonMaps} onPress={() => openTabMap("mapa")}>
        <View style={{ width: 47, height: 47, backgroundColor: '#2887DF', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Feather name="map" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View >
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
  buttonMaps: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 53,
    width: 53,
    bottom: 25,
    left: '50%',
    right: '50%',
    marginLeft: -25,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
