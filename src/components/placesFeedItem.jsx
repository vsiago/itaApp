import { View, Text, Image, TouchableOpacity } from 'react-native';

const PlaceFeedItem = ({ imageURL, title, description, likes }) => {
  return (
    <TouchableOpacity style={{ elevation: 1 }} className="w-full bg-slate-100 rounded-lg mb-3">
      <Image
        source={{ uri: imageURL }}
        style={{ height: 200, width: '100%', resizeMode: 'cover' }}
        className="rounded-t-lg"
      />
      <View className="">
        <Text className="text-lg font-bold text-slate-600 mx-3 my-3 mb-1 leading-6">{title}</Text>
      </View>
      <View className="mx-3 mt-2 mb-3 pt-2 border-t-2 border-slate-200 flex-row">
        <Text className=" py-1 font-semibold text-slate-600 text-base mr-3">Curtir   |</Text>
        <Text className=" py-1 font-semibold text-slate-500 text-base">{likes}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceFeedItem;