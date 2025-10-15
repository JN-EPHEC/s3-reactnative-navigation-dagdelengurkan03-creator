import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.row}>Name: John Doe</Text>
      <Text style={styles.row}>Username: @johndoe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { fontSize: 16, marginBottom: 8 },
});
