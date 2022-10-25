import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GreetingText from './components/greetingText';
import InputSection from './components/inputSection';

export default function App() {
  return (
    <View style={styles.container}>
      <GreetingText />
      <InputSection />
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
