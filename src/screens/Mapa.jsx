import { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import { styles } from "../../styles";
import customMapStyle from "../../assets/mapStyles/customMapStyleLight.json";

export default function App() {
  const [location, setLocation] = useState(null);

  const mapRef = useRef(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
        mapRef.current?.animateCamera({
          pitch: 70,
          center: response.coords,
        });
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            customMapStyle={customMapStyle}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </MapView>
          <TouchableOpacity style={styles.buttonOpenDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
