import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function CourseDetailScreen({ route, navigation }: any) {
  const { title, description, color } = route?.params ?? { title: 'Unknown', description: '', color: Colors.courses };

  React.useEffect(() => {
    if (color) {
      navigation?.setOptions?.({ headerStyle: { backgroundColor: color }, headerTintColor: Colors.card });
    }
  }, [color, navigation]);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color ?? Colors.courses }]}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16, backgroundColor: Colors.background }, title: { fontSize: 18, marginBottom: 8, color: Colors.courses, fontWeight: '700' }, desc: { fontSize: 16, color: Colors.text } });
