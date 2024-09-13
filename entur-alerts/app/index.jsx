import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import AlertItem from '../components/AlertItem';

const HomePage = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlerts = async () => {
    try {
      const response = await axios.get('https://api.entur.io/realtime/v1/rest/sx', {
        headers: {
          'Accept': 'application/json',
          'ET-Client-Name': 'entur-alerts',
        },
        params: {
          'datasetId': 'RUT',
        }
      });

      const siriData = response.data?.Siri;
      const ptSituationElement = siriData.ServiceDelivery?.SituationExchangeDelivery?.[0]?.Situations?.PtSituationElement;
      
      const alertsData = ptSituationElement.map((element) => ({
        summary: element.Summary?.[0]?.value,
        description: element.Description?.[0]?.value,
      }));
      
      setAlerts(alertsData);

    } catch (error) {
      console.error('Error fetching alerts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={alerts}
        renderItem={({ item }) => (
          <AlertItem summary={item.summary} description={item.description}/>
        )} 
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchAlerts}
        refreshing={loading}
      />
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
});

export default HomePage;
