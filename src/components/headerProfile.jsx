import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HeaderProfile() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,55,104,1)', 'transparent']}
        style={styles.background}
      />
      <View style={styles.containerProfile} >
          <View style={styles.containerProfileTexts}>
            <Text style={styles.textName}>Iago Souza</Text>
            <Text style={styles.textClima}>Tempo limpo, 23º</Text>
          </View>
          <View style={styles.photoAvatar}>
            <View style={styles.avatar}>

            </View>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '25%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10,
    top: -13,
    left: 0,
    zIndex: 2000,
    paddingHorizontal: 20
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400,
    height: '120%',
  },
  containerProfile: {
    padding: 15,
    flexDirection: 'row',
    gap: 10
  },
  containerProfileTexts: {  
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textName: {
    fontSize: 18,
    color: '#fff',
  },
  textClima: {
    fontSize: 15,
    color: '#DCEBF3',
  },
  photoAvatar: {
    width: 50,
    height: 50,
    backgroundColor: '#2887DF',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 42,
    height: 42,
    backgroundColor: '#fff',
    borderRadius: 100
  }
});
