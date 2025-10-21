import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

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
  container: { flex: 1, padding: 16, backgroundColor: Colors.background },
  title: { fontSize: 18, marginBottom: 8, color: Colors.text },
  body: { fontSize: 16, color: Colors.muted }
});
