import { Text, View } from "react-native";
import HeaderProfile from "../components/headerProfile";

export default function Feed() {
  return (
    <View className="flex-1 items-center justify-start bg-[#D0DAE5]">
      <HeaderProfile />
      <View className="bg-[#005B8E] p-10 w-full min-h-[240px] rounded-br-[100px] rounded-bl-[100px]">
      </View>
    </View>
  );
}
