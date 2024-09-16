import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import AlertItem from '../components/AlertItem';

const HelpPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Hjelpeside</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    backgroundColor: '#3D6DCC',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HelpPage;
