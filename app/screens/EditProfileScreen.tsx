import * as React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={'Dagdelen Gurkan'} />
      <Text style={styles.label}>Age</Text>
      <TextInput style={styles.input} value={'24'} />
      <Text style={styles.label}>Gender</Text>
      <TextInput style={styles.input} value={'Male'} />

      <Pressable style={styles.saveButton} android_ripple={{ color: '#0001' }}>
        <Text style={styles.saveText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: Colors.background },
  label: { color: Colors.muted, marginTop: 12 },
  input: { backgroundColor: Colors.card, padding: 10, borderRadius: 8, borderColor: Colors.border, borderWidth: 1, marginTop: 6 },
  saveButton: { marginTop: 20, backgroundColor: Colors.primary, padding: 12, borderRadius: 8, alignItems: 'center' },
  saveText: { color: Colors.card, fontWeight: '600' },
});
