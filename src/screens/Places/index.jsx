import { ScrollView } from "react-native";
import HeaderProfile from "../../components/headerProfile";
import HeaderPage from "../../components/headerPage";
import PlacesFeed from "./Feed/feedPlaces"
import CarrosselPlaces from "./Carrossel/CarrosselPlaces";

export default function Feed() {

  return (
    <ScrollView className="bg-slate-200">
      <HeaderProfile />
      <HeaderPage NomePage="Lugares" iconName="images" />
      <CarrosselPlaces />
      <PlacesFeed />
    </ScrollView>
  );
}