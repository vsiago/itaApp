import { View, Text, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import placesData from '../../../../../assets/places.json'

export default function PlacesMenu() {

  const [colorButtonDefault, setColorButtonDefault] = useState('')
  const [todos, setTodos] = useState('api-todos')
  const [places, setPlaces] = useState(null)

  useEffect(() => {
    setPlaces(placesData.lugares)
    setTodos(todos)
    setColorButtonDefault('bg-slate-500')

  }, [])
  // colorButtonDefault


  return (

    <View className="flex-1 w-full items-start justify-start px-5 absolute -top-10 left-5 z-50">
      <View className="flex-row gap-2 justify-center items-center pr-1">
        {places.map((place, key) => (
          <TouchableOpacity key={key} className="bg-white opacity-90 rounded-full items-center justify-center p-1" style={{ elevation: 2 }}>
            <View style={{ elevation: 20 }} className={`${colorButtonDefault} rounded-full h-[75px] w-[75px] items-center justify-center`}>
              <Text className="text-lg font-medium text-white break-words text-center">
                Ico
              </Text>
            </View>
            <View className="my-3">
              <Text className="text-xs font-semibold text-slate-500 break-words text-center">
                {place.nome}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>

  )
}