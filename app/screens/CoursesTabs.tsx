import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import CourseListScreen from './CourseListScreen';
import CourseDetailScreen from './CourseDetailScreen';
import WishlistScreen from './WishlistScreen';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CourseList" component={CourseListScreen} options={{ title: 'All Courses' }} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: 'Course Detail' }} />
    </Stack.Navigator>
  );
}

export default function CoursesTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => {
        const icons: Record<string, string> = { 'All Courses': '📚', Wishlist: '🤍' };
        return <Text style={{ fontSize: 18 }}>{icons[route.name] ?? '•'}</Text>;
      },
  tabBarActiveTintColor: Colors.courses,
      tabBarInactiveTintColor: Colors.muted,
  headerStyle: { backgroundColor: Colors.courses },
      headerTintColor: Colors.card,
      tabBarStyle: { backgroundColor: Colors.card, borderTopColor: Colors.border },
    })}>
      <Tab.Screen name="All Courses" component={CoursesStack} options={{ headerShown: false }} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} options={{ title: 'My Wishlist' }} />
    </Tab.Navigator>
  );
}
