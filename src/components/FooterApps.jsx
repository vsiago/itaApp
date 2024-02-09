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
          <Text>Coleta de Lixo</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
<<<<<<< HEAD:src/components/footerApps.jsx
    bottom: 0,
    zIndex: 2000,
    paddingBottom: 20,
    paddingHorizontal: 20
=======
    gap: 10,
    bottom: 49,
    zIndex: 2000,
    borderBottomWidth: 1,
    borderBottomColor: '#003768',
    // pointerEvents: 'none'
>>>>>>> 4e404a19a9be4e25aa18374d5d3a93a189ac0e72:src/components/FooterApps.jsx
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '140%',
  },
  buttonContainer: {
    borderRadius: 100,
    width: '43%',
    height: 60,
    zIndex: 1000,
    elevation: 20,
<<<<<<< HEAD:src/components/footerApps.jsx
    marginLeft: 5
  },
  touchBotton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
=======
    // pointerEvents: 'auto'
  },
  touchBotton: {
    height: '100%',
    width: '100%',
>>>>>>> 4e404a19a9be4e25aa18374d5d3a93a189ac0e72:src/components/FooterApps.jsx
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
});
