import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

const COURSES = [
  { id: 'c1', title: 'Intro to React Native', description: 'Learn the basics of React Native.' },
  { id: 'c2', title: 'Advanced JavaScript', description: 'Deep dive into modern JS features.' },
  { id: 'c3', title: 'UI/UX for Developers', description: 'Design principles for developers.' },
];

export default function CourseListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            onPress={() => navigation.navigate('CourseDetail', { courseId: item.id, title: item.title, description: item.description })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: { padding: 12, marginBottom: 12, backgroundColor: 'rgba(0,0,0,0.03)', borderRadius: 8 },
  pressed: { opacity: 0.7 },
  title: { fontSize: 16 },
});
