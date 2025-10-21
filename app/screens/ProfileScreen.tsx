import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.row}>Name: Dagdelen Gurkan</Text>
      <Text style={styles.row}>Age: 24</Text>
      <Text style={styles.row}>Gender: Male</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16, backgroundColor: Colors.background }, row: { fontSize: 16, marginBottom: 8, color: Colors.text } });
