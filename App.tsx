import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function clickHandler() {
  console.log("Button pressed");
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, my boy!</Text>
      <Button title="Click me!"
      onPress={clickHandler}
      accessibilityLabel="I said click me don't hesitate"
      color="#841584" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
