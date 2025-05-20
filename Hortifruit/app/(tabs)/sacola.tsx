import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function SacolaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.content}>
        <Image
          source={require('@/assets/images/farmer.png')}
          accessibilityLabel="Imagem de um agricultor"
          style={styles.image}
        />
        <Text style={styles.title}>Adicione algo na sacola</Text>
        <Text style={styles.subtitle}>Faça sua experiência comprando as melhores hortaliças</Text>
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
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
