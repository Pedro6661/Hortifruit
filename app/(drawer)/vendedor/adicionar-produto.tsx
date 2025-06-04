import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

export default function AdicionarProdutoScreen() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('/vendedor-home')}>
        <Text style={styles.backText}>{'< Voltar'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Adicionar Produto</Text>
      {/* Conteúdo da tela de adicionar produto */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#222' },
  backBtn: { position: 'absolute', top: 40, left: 20, padding: 8 },
  backText: { color: '#22c55e', fontSize: 16, fontWeight: 'bold' },
}); 