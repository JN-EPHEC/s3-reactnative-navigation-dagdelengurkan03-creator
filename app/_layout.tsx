import "react-native-reanimated";

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CoursesTabs from './screens/CoursesTabs';
import ProfileDrawerScreen from './screens/ProfileDrawerScreen';

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <Drawer.Navigator initialRouteName="Courses">
      <Drawer.Screen name="Courses" component={CoursesTabs} />
      <Drawer.Screen name="My Profile" component={ProfileDrawerScreen} />
    </Drawer.Navigator>
  );
}
