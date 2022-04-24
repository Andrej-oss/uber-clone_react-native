import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { Provider } from 'react-redux';
import { HomeScreen } from "./screens/index";
import { Store } from "./store/store";

export default function App() {
  return (
      <Provider store={Store}>
        <SafeAreaProvider>
        <View style={styles.container}>
          <HomeScreen/>
          <StatusBar style="auto"/>
        </View>
        </SafeAreaProvider>
      </Provider>
  );
}

const styles = StyleSheet.create({
});
