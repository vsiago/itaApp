import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Mapa from "../screens/Mapa";
import Dashboard from "../screens/Dashboard";
<<<<<<< HEAD
import Line from "../components/line";
import { useNavigation } from "@react-navigation/native";
import Places from "../screens/Places";
=======
<<<<<<< HEAD
import FooterApp from "../components/FooterApps";
=======
import FooterApp from "../components/line"; // Importe seu componente FooterApp aqui
>>>>>>> 4e404a19a9be4e25aa18374d5d3a93a189ac0e72

>>>>>>> fb82736a45fc5915e719e7996bf378240db81860

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
            tabBarIcon: ({ size, focused }) => null, // Oculta o ícone definindo como null
            tabBarButton: () => null, // Oculta o contêiner da guia
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
      {showFooter && <Line />}
      <TouchableOpacity style={styles.buttonMaps} onPress={() => openTabMap("mapa")}>
        <View style={{ width: 47, height: 47, backgroundColor: '#2887DF', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Feather name="map" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
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
