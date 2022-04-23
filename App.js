import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { HomeScreen } from "./screens/index";
import { Store } from "./store/store";

export default function App() {
  return (
      <Provider store={Store}>
        <View style={styles.container}>
          <HomeScreen/>
          <StatusBar style="auto"/>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
});
