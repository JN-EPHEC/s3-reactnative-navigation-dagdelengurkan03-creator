import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import ProductListScreen from './ProductListScreen';
import ProductDetailScreen from './ProductDetailScreen';
import MyCart from './MyCart';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();
const ShopStack = createNativeStackNavigator<any>();

function ShopStackNavigator() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products' }} />
      <ShopStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Detail' }} />
    </ShopStack.Navigator>
  );
}

export default function EcommerceTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => {
        const icons: Record<string, string> = { Shop: '🛍️', 'My Cart': '🧺' };
        return <Text style={{ fontSize: 18 }}>{icons[route.name] ?? '•'}</Text>;
      },
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.muted,
      headerStyle: { backgroundColor: Colors.primary },
      headerTintColor: Colors.card,
      tabBarStyle: { backgroundColor: Colors.card, borderTopColor: Colors.border },
    })}>
      <Tab.Screen name="Shop" component={ShopStackNavigator} options={{ title: 'Shop' }} />
      <Tab.Screen name="My Cart" component={MyCart} options={{ title: 'My Cart' }} />
    </Tab.Navigator>
  );
}
