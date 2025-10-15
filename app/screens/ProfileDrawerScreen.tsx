import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDrawerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name: Jane Student</Text>
      <Text style={styles.username}>Username: @janestudent</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 }, name: { fontSize: 16, marginBottom: 8 }, username: { fontSize: 14 } });
