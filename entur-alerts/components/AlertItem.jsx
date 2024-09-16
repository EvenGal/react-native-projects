import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 70;

const AlertItem = ({ summary, description, onPress }) => {

  const truncateText = (text, maxLength) => {
    if (!text || typeof text !== 'string') {
      return '';
    }
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const truncatedSummary = truncateText(summary, MAX_TITLE_LENGTH);
  const truncatedDescription = truncateText(description, MAX_DESCRIPTION_LENGTH);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.summary}>{truncatedSummary}</Text>
        <Text style={styles.description}>{truncatedDescription}</Text>
      </View>
    </Pressable>
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
    fontFamily: 'Kanit-Sans-Serif',
    fontStyle: 'Italic'
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
