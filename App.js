import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DevelopmentScreen from './screens/DevelopmentScreen';
import PhotosScreen from './screens/PhotosScreen';
import PrivateScreen from './screens/PrivateScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Add navigation here
    // ok
    // TAB NAVIGATION
    <NavigationContainer>
      <Tab.Navigator initialRouteName='home'>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="development" component={DevelopmentScreen} />
        <Tab.Screen name="photos" component={PhotosScreen} />
        <Tab.Screen name="private" component={PrivateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
    // STACK NAVIGATION
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='home'>
    //     <Stack.Screen name="home" component={HomeScreen} />
    //     <Stack.Screen name="development" component={DevelopmentScreen} />
    //     <Stack.Screen name="photos" component={PhotosScreen} />
    //     <Stack.Screen name="private" component={PrivateScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

