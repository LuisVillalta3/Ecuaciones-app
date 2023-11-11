import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const EcuacionApp = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [solucion, setSolucion] = useState('');

  const resolverEcuacion = () => {
    const aFloat = parseFloat(a);
    const bFloat = parseFloat(b);

    if (aFloat === 0) {
      setSolucion('La ecuación no es de primer grado.');
    } else {
      const x = -bFloat / aFloat;
      setSolucion(`El valor de x es: ${x.toFixed(2)}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Ingrese el valor de "a":</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese a"
        keyboardType="numeric"
        value={a}
        onChangeText={text => setA(text)}
      />

      <Text>Ingrese el valor de "b":</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese b"
        keyboardType="numeric"
        value={b}
        onChangeText={text => setB(text)}
      />

      <Button title="Resolver Ecuación" onPress={resolverEcuacion} />

      <Text style={styles.resultado}>{solucion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  resultado: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default EcuacionApp;