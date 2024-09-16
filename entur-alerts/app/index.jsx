import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Modal,
  Button
} from 'react-native';
import axios from 'axios';
import AlertItem from '../components/AlertItem';

const HomePage = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);

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

  const handleAlertPress = (alert) => {
    setSelectedAlert(alert);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedAlert(null);
  };

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
          <AlertItem
            summary={item.summary}
            description={item.description}
            onPress={() => handleAlertPress(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchAlerts}
        refreshing={loading}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedAlert && (
              <>
                <Text style={styles.modalTitle}>{selectedAlert?.summary}</Text>
                <Text style={styles.modalDescription}>{selectedAlert?.description}</Text>
              </>
            )}
            <Button title="Close" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    marginBottom: 20,
    fontSize: 16,
  },
});

export default HomePage;
