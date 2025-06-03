import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function CadastroTipo() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltarBtn} onPress={() => router.back()}>
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.titulo}>CRIAR CONTA</Text>
        <Text style={styles.texto}>
          Ficamos muito felizes em saber que deseja fazer parte dessa história!
        </Text>

        <Image source={require('../assets/images/splash-icon.png')} style={styles.imagem} />

        <Text style={styles.texto2}>Abaixo, escolha um tipo de conta que deseja criar:</Text>

        <TouchableOpacity style={styles.btnComprar} onPress={() => router.push('/cadastro-comprador')}>
          <Text style={styles.btnText}>QUERO COMPRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnVender} onPress={() => router.push('/cadastro-vendedor' as any)}>
          <Text style={styles.btnText}>QUERO VENDER</Text>
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
    paddingHorizontal: 24,
  },
  voltarBtn: {
    backgroundColor: '#199e4a',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  voltarText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  texto: {
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 15,
    color: '#333',
  },
  imagem: {
    width: 90,
    height: 60,
    marginVertical: 12,
    resizeMode: 'contain',
  },
  texto2: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    color: '#333',
  },
  btnComprar: {
    backgroundColor: '#c46e19',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  btnVender: {
    backgroundColor: '#19c437',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  link: {
    color: '#199e4a',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 30,
  },
});
