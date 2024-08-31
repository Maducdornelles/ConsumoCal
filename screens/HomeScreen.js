import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {
  const [kilometers, setKilometers] = useState('');
  const [liters, setLiters] = useState('');

  const calculateConsumption = () => {
    const averageConsumption = kilometers / liters;

    // Lógica de classificação (ajuste os valores de acordo com sua tabela)
    let classification;
    if (averageConsumption > 12) {
      classification = 'A';
    } else if (averageConsumption <= 12 && averageConsumption > 10) {
      classification = 'B';
    } else if (averageConsumption <= 10 && averageConsumption > 8) {
      classification = 'C';
    } else if (averageConsumption <= 8 && averageConsumption > 4) {
      classification = 'D';
    } else {
      classification = 'E';
    }

    navigation.navigate('Results', { averageConsumption, classification });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ConsumoCal</Text>
      <TextInput
        style={styles.input}
        placeholder="Kilometragem"
        keyboardType="numeric"
        value={kilometers}
        onChangeText={setKilometers}
      />
      <TextInput
        style={styles.input}
        placeholder="Litros"
        keyboardType="numeric"
        value={liters}
        onChangeText={setLiters}
      />
      <TouchableOpacity style={styles.button} onPress={calculateConsumption}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#191970',
  },
  input: {
    borderWidth: 1,
    borderColor: '#191970',
    width: '80%',
    height: 55,
    color: 'black',
    fontSize: 15,
    padding: 12,
    borderRadius: 100,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 100,
    padding: 15,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default HomeScreen;