import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiThings from './components/apiThings';
import { AppRegistry } from 'react-native';

import GreetingText from './components/greetingText';
import InputSection from './components/inputSection';
import SectionListBasics from './components/reactNativeList';
import ScrollViewSection from './components/scrollViewSection';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import HeadBar from './components/layout/headbar';


export default function App() {
  return (
    <PaperProvider>
      {/* <GreetingText />
      <InputSection />
      <ScrollViewSection />
      <SectionListBasics /> */}
      <HeadBar />
      <ApiThings />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}



AppRegistry.registerComponent(appName, () => App);


