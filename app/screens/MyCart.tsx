import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyCart() {
  return (
    <View style={styles.container}>
      <Text>Your Shopping Cart is empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', justifyContent: 'center' } });
