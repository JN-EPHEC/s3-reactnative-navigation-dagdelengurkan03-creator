import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          // simple emoji icons for the exercise
          const icons: Record<string, string> = {
            Home: '🏠',
            Profile: '👤',
            Settings: '⚙️',
          };
          return <Text style={{ fontSize: 18 }}>{icons[route.name] ?? '•'}</Text>;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.muted,
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.card,
        tabBarStyle: { backgroundColor: Colors.card, borderTopColor: Colors.border },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
}
