import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../constants/Colors';

export default function ProfileDrawerScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.avatar} />
          <View style={styles.headerText}>
            <Text style={styles.name}>Dagdelen Gurkan</Text>
            <Text style={styles.handle}>Age: 24 · Male</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>About</Text>
          <Text style={styles.paragraph}>
            Hey — I build sample React Native apps and explore navigation patterns. This profile is a demo for the Course Finder assignment.
          </Text>
        </View>

        <View style={styles.actionsRow}>
          <Pressable style={styles.button} android_ripple={{ color: '#0001' }} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.secondary]} android_ripple={{ color: '#0001' }} onPress={() => navigation.navigate('Contact')}>
            <Text style={[styles.buttonText, styles.secondaryText]}>Contact</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.metaItem}>Enrolled courses: 3</Text>
        <Text style={styles.metaItem}>Wishlist: 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: Colors.background },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 16, borderColor: Colors.border, borderWidth: 1 },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: Colors.primary },
  headerText: { marginLeft: 12 },
  name: { fontSize: 18, fontWeight: '700', color: Colors.text },
  handle: { fontSize: 14, color: Colors.muted, marginTop: 2 },
  section: { marginTop: 12 },
  label: { fontSize: 12, color: Colors.muted, marginBottom: 6 },
  paragraph: { color: Colors.text, lineHeight: 20 },
  actionsRow: { flexDirection: 'row', marginTop: 12 },
  button: { flex: 1, paddingVertical: 10, borderRadius: 8, backgroundColor: Colors.primary, alignItems: 'center', marginRight: 8 },
  secondary: { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.primary, marginRight: 0 },
  buttonText: { color: Colors.card, fontWeight: '600' },
  secondaryText: { color: Colors.primary },
  metaRow: { marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' },
  metaItem: { color: Colors.muted },
});
