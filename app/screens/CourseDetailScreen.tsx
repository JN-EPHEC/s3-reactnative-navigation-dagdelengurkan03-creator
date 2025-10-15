import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseDetailScreen({ route }: any) {
  const { title, description } = route?.params ?? { title: 'Unknown', description: '' };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 }, title: { fontSize: 18, marginBottom: 8 }, desc: { fontSize: 16 } });
