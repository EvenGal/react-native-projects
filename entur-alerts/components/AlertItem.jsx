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
    paddingVertical: 20,      
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,  
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  summary: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
});

export default AlertItem;
