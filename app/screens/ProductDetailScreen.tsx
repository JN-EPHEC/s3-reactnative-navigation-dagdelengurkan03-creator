import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function ProductDetailScreen({ route }: any) {
  const { title, content } = route?.params ?? { title: 'Unknown', content: '' };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, marginBottom: 8 },
  body: { fontSize: 16 }
});
