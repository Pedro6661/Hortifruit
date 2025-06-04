import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function CadastroTipo() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => router.back()}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.titulo}>CRIAR CONTA</Text>
        <Text style={styles.texto}>Ficamos muito felizes em saber que deseja fazer parte dessa história!</Text>
        <Image source={require('../assets/images/splash-icon.png')} style={styles.imagem} />
        <Text style={styles.texto2}>Abaixo, escolha um tipo de conta que deseja criar:</Text>
        <TouchableOpacity style={styles.btnComprar} onPress={() => router.push('/cadastro-comprador')}>
          <Text style={styles.btnComprarText}>QUERO COMPRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnVender} onPress={() => {}}>
          <Text style={styles.btnVenderText}>QUERO VENDER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text style={styles.link}>Já possui conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  voltar: {
    marginLeft: 16,
    marginBottom: 10,
  },
  voltarText: {
    fontSize: 18,
    color: '#222',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  texto: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 15,
  },
  imagem: {
    width: 90,
    height: 60,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  texto2: {
    textAlign: 'center',
    marginBottom: 18,
    fontSize: 15,
  },
  btnComprar: {
    backgroundColor: '#c46e19',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
  },
  btnComprarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  btnVender: {
    backgroundColor: '#19c437',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
  },
  btnVenderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  link: {
    color: '#199e4a',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 15,
    marginBottom: 40,
  },
}); 