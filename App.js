import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet, View, Button } from 'react-native';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  return (
    <ImageBackground source={require('./assets/homePizza.jpg')} resizeMode="cover" style={styles.image}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
          />
          <Stack.Screen
            name="About"
            component={About}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    color: '#010100',
  }
});
