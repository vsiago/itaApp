import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import HeaderProfile from "../components/headerProfile";
import Swiper from 'react-native-swiper'

export default function Feed() {
  return (
    <ScrollView className="">
      <View className="flex-1 items-start  bg-[#D0DAE5]">
        <HeaderProfile />
        <View className="bg-[#003768] p-0 w-full min-h-[380px] rounded-br-[50px] rounded-bl-[50px]">
        </View>

        {/*------------------- Carrossel ------------------- */}

        <View className="absolute mt-[122px] z-[2000]  h-[190px] mx-5 left-0 right-0 transform -translate-x-1/2 -translate-y-1/2">
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

        <View className="flex-1 w-full items-start justify-start px-5">

          {/* ------------------- Menu Servicos ------------------- */}

          <View className="absolute -top-8 flex-row gap-2 justify-center items-center pr-1 left-0 right-0 z-50">
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
          {/* ------------------- Feed Noticias ------------------- */}

          <View className="flex-1 justify-start items-start w-full mt-24 mb-10">
            <Text className="uppercase font-medium tracking-wide text-slate-600 mb-5">Noticias</Text>
            <TouchableOpacity style={{ elevation: 1 }} className="w-full bg-slate-200 rounded-bl-md rounded-md mb-4">
              <View className="bg-slate-400 h-[160] w-full items-center justify-center rounded-t-md">
                <Text>Imagem</Text>
              </View>
              <View className="">
                <Text className="text-lg font-bold text-slate-600 mx-3 my-3 mb-1 leading-6">Novo Hospital Sao Francisco Xavier</Text>
              </View>
              <View className="px-3 pb-3">
                <Text className="text-base font-normal text-slate-500">Aqui vai uma descricao de um materia da Prefeitura para o publico clicar e consumir.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ elevation: 1 }} className="w-full bg-slate-200 rounded-bl-md rounded-md mb-4">
              <View className="bg-slate-400 h-[160] w-full items-center justify-center rounded-t-md">
                <Text>Imagem</Text>
              </View>
              <View className="">
                <Text className="text-lg font-bold text-slate-600 mx-3 my-3 mb-1 leading-6">Novo projeto de mobilidade urbana é anunciado pela prefeitura</Text>
              </View>
              <View className="px-3 pb-3">
                <Text className="text-base font-normal text-slate-500">Aqui vai uma descricao de um materia da Prefeitura para o publico clicar e consumir.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ elevation: 1 }} className="w-full bg-slate-200 rounded-bl-md rounded-md mb-4">
              <View className="bg-slate-400 h-[160] w-full items-center justify-center rounded-t-md">
                <Text>Imagem</Text>
              </View>
              <View className="">
                <Text className="text-lg font-bold text-slate-600 mx-3 my-3 mb-1 leading-6">Prefeitura investe em iniciativas de sustentabilidade para tornar a cidade mais verde</Text>
              </View>
              <View className="px-3 pb-3">
                <Text className="text-base font-normal text-slate-500">Aqui vai uma descricao de um materia da Prefeitura para o publico clicar e consumir.</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}