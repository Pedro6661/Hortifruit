import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SacolaScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sacola</Text>
      </View>

      {/* Conteúdo central */}
      <View style={styles.content}>
        <Image
          source={require('../../../assets/logo.jpg')} // Troque para a imagem correta depois
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Adicione algo na sacola</Text>
        <Text style={styles.subtitle}>
          Faça sua experiência comprando as melhores hortaliças
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    borderRadius: 12,
    marginTop: 50,
    marginHorizontal: 12,
    padding: 12,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
    color: '#222',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 24,
  },
});
