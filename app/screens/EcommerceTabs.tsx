import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import ProductListScreen from './ProductListScreen';
import ProductDetailScreen from './ProductDetailScreen';
import MyCart from './MyCart';

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
      tabBarActiveTintColor: '#1f8f4f',
      tabBarInactiveTintColor: '#8e8e93',
    })}>
      <Tab.Screen name="Shop" component={ShopStackNavigator} options={{ title: 'Shop' }} />
      <Tab.Screen name="My Cart" component={MyCart} options={{ title: 'My Cart' }} />
    </Tab.Navigator>
  );
}
