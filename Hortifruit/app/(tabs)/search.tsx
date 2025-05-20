import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';

const produtos = [
  'Alface', 'Tomate', 'Cenoura', 'Banana', 'Maçã',
  'Queijo', 'Leite', 'Cebolinha', 'Alho-Poró',
];

export default function SearchScreen() {
  const [search, setSearch] = useState('');

  const resultados = produtos.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={resultados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.result}>{item}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  result: {
    padding: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
