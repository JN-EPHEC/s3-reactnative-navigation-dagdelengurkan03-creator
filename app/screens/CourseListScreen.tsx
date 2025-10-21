import * as React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const COURSES = [
  { id: 'c1', title: 'Intro to React Native', description: 'Learn the basics of React Native.' },
  { id: 'c2', title: 'Advanced JavaScript', description: 'Deep dive into modern JS features.' },
  { id: 'c3', title: 'UI/UX for Developers', description: 'Design principles for developers.' },
];

// attach a color from palette to each course deterministically
const COURSES_WITH_COLORS = COURSES.map((c, idx) => ({ ...c, color: Colors.coursesPalette[idx % Colors.coursesPalette.length] }));

export default function CourseListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
  data={COURSES_WITH_COLORS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            onPress={() => navigation.navigate('CourseDetail', { courseId: item.id, title: item.title, description: item.description, color: item.color })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  list: { padding: 16 },
  item: { padding: 12, marginBottom: 12, backgroundColor: Colors.card, borderRadius: 8, borderColor: Colors.border, borderWidth: 1 },
  pressed: { opacity: 0.7 },
  title: { fontSize: 16, color: Colors.text },
});
