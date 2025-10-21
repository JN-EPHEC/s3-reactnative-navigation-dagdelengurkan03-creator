import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import Colors from '../constants/Colors';

const WISHLIST = [
  { id: 'p1', name: 'Laptop', description: 'A powerful laptop for work and play.' },
  { id: 'p3', name: 'Keyboard', description: 'Mechanical keyboard with nice switches.' },
];

export default function WishlistScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={WISHLIST}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => navigation.navigate('ProductDetail', { title: item.name, content: item.description })}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: Colors.background }, list: { padding: 16 }, item: { backgroundColor: Colors.card, padding: 12, borderRadius: 8, marginBottom: 12, borderColor: Colors.border, borderWidth: 1 }, name: { fontSize: 16, color: Colors.text }, desc: { color: Colors.muted, marginTop: 6 } });
