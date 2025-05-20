import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.info}>Nome: João</Text>
        <Text style={styles.info}>Email: joao@email.com</Text>
        <Text style={styles.info}>Telefone: (61) 99999-9999</Text>
        <Text style={styles.info}>Endereço: R. Exemplo, 123 - Brasília</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 24,
  },
  info: {
    fontSize: 16,
    marginBottom: 12,
  },
});
