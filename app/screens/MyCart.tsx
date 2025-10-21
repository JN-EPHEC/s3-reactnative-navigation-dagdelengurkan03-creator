import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function MyCart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Shopping Cart is empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.background }, text: { color: Colors.muted } });
