import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FooterApps() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0,55,104,1)']}
        style={styles.background}
      />
      <LinearGradient
        colors={['#fff', '#fff']}
        style={styles.buttonContainer}
      >
        <TouchableOpacity style={styles.touchBotton}>
          <Text style={styles.text}>Onibus Gratis</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        colors={['#fff', '#fff']}
        style={styles.buttonContainer}
      >
        <TouchableOpacity style={styles.touchBotton}>
          <Text>Onibus Gratis</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '25%',
    paddingHorizontal: 25,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 10,
    bottom: 0,
    zIndex: 2000,
    borderBottomWidth: 1,
    borderBottomColor: '#003768',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 400,
    height: '120%',
  },
  buttonContainer: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '45%',
    height: 100,
    zIndex: 1000,
    elevation: 20
  },
  touchBotton: {
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
});
