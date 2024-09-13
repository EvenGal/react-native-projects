import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlertItem = ({ summary, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.summary}>{summary}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  summary: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    marginTop: 5,
    color: '#666',
  },
});

export default AlertItem;
