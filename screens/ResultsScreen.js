import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsScreen = ({ route }) => {
  const { averageConsumption, classification } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.resultCard}>
        <Text style={[styles.resultText1, classification === 'A' ? styles.classificationA : classification === 'B' ? styles.classificationB : classification === 'C' ? styles.classificationC : classification === 'D' ? styles.classificationD : styles.classificationE]}>
          {classification}
        </Text>
        <Text style={styles.resultText2}>Consumo médio: {averageConsumption} km/L</Text>
        <Text style={styles.resultText2}>
          {classification === 'A' ? 'Excelente!' : classification === 'B' ? 'Bom' :
            classification === 'C' ? 'Regular' : classification === 'D' ? 'Ruim' : 'Muito Ruim'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultCard: {
    backgroundColor: '#B0E0E6',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  resultText1: {
    color: 'black',
    fontSize: 100,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  classificationA: {
    color: '#00923F',
  },
  classificationB: {
    color: '#9DCD16',
  },
  classificationC: {
    color: '#FEF500',
  },
  classificationD: {
    color: '#F3AD00',
  },
  classificationE: {
    color: '#D82519',
  },
  resultText2: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ResultsScreen;