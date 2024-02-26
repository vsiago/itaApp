import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import placesData from '../../../../../assets/places.json';

export default function PlacesMenu() {
  const [colorButtonDefault, setColorButtonDefault] = useState('bg-slate-500');
  const [places, setPlaces] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    setPlaces(placesData.lugares);
    setColorButtonDefault('bg-slate-500');
  }, []);

  const handlePlacePress = (place) => {
    if (selectedPlace !== place) {
      setSelectedPlace(place);
    }
  };

  return (
    <View className="flex-1 w-full items-start justify-start px-5 absolute -top-10 left-5 z-50">
      <View className="flex-row gap-2 justify-center items-center pr-1">
        {places &&
          places.map((place, key) => (
            <View key={key}>
              <TouchableOpacity
                onPress={() => handlePlacePress(place)}
                className="bg-white opacity-90 rounded-full items-center justify-center p-1"
                style={{ elevation: 2 }}
              >
                <View
                  style={{ elevation: 20 }}
                  className={`${colorButtonDefault} rounded-full h-[75px] w-[75px] items-center justify-center`}
                >
                  <Text className="text-lg font-medium text-white break-words text-center">
                    {place.icone}
                  </Text>
                </View>
                <View className="my-3">
                  <Text className="text-xs font-semibold text-slate-500 break-words text-center">
                    {place.nome}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </View>
      {selectedPlace && (
        <ScrollView horizontal showsVerticalScrollIndicator={false} className="h-14 w-screen -ml-6">
          {selectedPlace.categoria.map((categoria, index) => (
            <View key={index} className="bg-slate-300 p-1 mr-1 mt-3 rounded-full h-8 justify-center">
              <Text className='text-slate-600 mx-3' >{categoria.nome}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
