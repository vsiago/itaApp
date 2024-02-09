import { StyleSheet, Text, View } from "react-native";

export default function Places() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lugares de Itaguai</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
