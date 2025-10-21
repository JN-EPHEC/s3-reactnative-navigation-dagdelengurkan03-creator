import "react-native-reanimated";

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoursesTabs from './screens/CoursesTabs';
import ProfileDrawerScreen from './screens/ProfileDrawerScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ContactScreen from './screens/ContactScreen';
import Colors from './constants/Colors';

const Drawer = createDrawerNavigator();
const ProfileStack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerStyle: { backgroundColor: Colors.primary }, headerTintColor: Colors.card }}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileDrawerScreen} options={{ title: 'Profile' }} />
      <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
      <ProfileStack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact' }} />
    </ProfileStack.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Drawer.Navigator initialRouteName="Courses" screenOptions={{ headerStyle: { backgroundColor: Colors.primary }, headerTintColor: Colors.card }}>
      <Drawer.Screen name="Courses" component={CoursesTabs} />
      <Drawer.Screen name="My Profile" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
}
