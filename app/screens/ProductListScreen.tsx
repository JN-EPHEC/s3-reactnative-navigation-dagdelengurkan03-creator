import * as React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const PRODUCTS = [
  { id: 'p1', name: 'Laptop', description: 'A powerful laptop for work and play.' },
  { id: 'p2', name: 'Mouse', description: 'A smooth wireless mouse.' },
  { id: 'p3', name: 'Keyboard', description: 'Mechanical keyboard with nice switches.' },
];

export default function ProductListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
            onPress={() => navigation.navigate('ProductDetail', { title: item.name, content: item.description })}
          >
            <Text style={styles.name}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  list: { padding: 16 },
  item: {
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  itemPressed: { opacity: 0.7 },
  name: { fontSize: 16, color: Colors.text }
});
