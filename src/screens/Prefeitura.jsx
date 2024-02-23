import { Text, View, Image, TouchableOpacity } from "react-native";
import HeaderProfile from "../components/headerProfile";
import Swiper from 'react-native-swiper'

export default function Feed() {
  return (
    <View className="flex-1 items-center  bg-[#D0DAE5]">
      <HeaderProfile />
      <View className="bg-[#003768] p-0 w-full min-h-[380px] rounded-br-[50px] rounded-bl-[50px]">
      </View>

      {/*------------------- Carrossel ------------------- */}

      <View className="absolute mt-[122px]  h-[190px] mx-5 left-0 right-0 transform -translate-x-1/2 -translate-y-1/2">
        <Swiper
          autoplay={true}
          loop={true}
          paginationStyle={{ bottom: -20 }}
          dotColor="#c2c2c2"
          activeDotColor="#31A7E5"
        >
          <View>
            <Image
              className="rounded-2xl"
              source={require("../../assets/hospital-sx.png")} // Substitua pelo caminho da sua imagem
              style={{ width: "100%", height: "100%" }} // Ajuste os valores conforme necessário
            />
          </View>
          <View>
            <Image
              className="rounded-2xl"
              source={require("../../assets/praca-texeira.png")} // Substitua pelo caminho da sua imagem
              style={{ width: "100%", height: "100%" }} // Ajuste os valores conforme necessário
            />
          </View>
          <View>
            <Image
              className="rounded-2xl"
              source={require("../../assets/famacia-central.png")} // Substitua pelo caminho da sua imagem
              style={{ width: "100%", height: "100%" }} // Ajuste os valores conforme necessário
            />
          </View>
        </Swiper>
      </View>

      <View className="flex-1 items-center justify-start">

        {/* ------------------- Menu Servicos ------------------- */}

        <View className="absolute -top-8 flex-row gap-2 justify-center items-center pr-1">
          <TouchableOpacity className="bg-white h-24 w-28 rounded-lg items-center justify-center">
            <Text className="text-xs font-medium text-slate-600">
              2 Via de Boleto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white h-24 w-28 rounded-lg items-center justify-center">
            <Text className="text-xs font-medium text-slate-600">
              Prefeitura
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white h-24 w-28 rounded-lg items-center justify-center">
            <Text className="text-xs font-medium text-slate-600">
              Prefeitura
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ------------------- Menu Servicos ------------------- */}

      <View className="flex-1 justify-start items-start bg-red-100">
        <Text className="uppercase bg-red-500">Noticias</Text>
      </View>
    </View>
  );
}