import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
type Props = { route: any };

export default function PostDetailScreen({ route }: Props) {
  const { title, content } = route?.params ?? { title: 'Unknown', content: '' };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{content}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
