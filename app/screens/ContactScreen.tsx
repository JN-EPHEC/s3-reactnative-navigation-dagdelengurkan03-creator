import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.body}>g.dagdelen@students.ephec.be</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16, backgroundColor: Colors.background }, title: { fontSize: 18, fontWeight: '700', color: Colors.text }, body: { marginTop: 8, color: Colors.muted } });
