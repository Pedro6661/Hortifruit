<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/basket.png')} style={styles.image} />
      <View style={{ width: '85%' }}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Senha</Text>
        <View style={styles.senhaContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Text style={styles.eyeIcon}>{mostrarSenha ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.link}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/cadastro-tipo')}>
          <Text style={styles.link2}>Ainda não possui cadastro? Pressione aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 140,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 2,
    color: '#222',
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 15,
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  eyeIcon: {
    fontSize: 22,
    marginLeft: 8,
  },
  link: {
    color: '#199e4a',
    textAlign: 'right',
    marginBottom: 18,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#19c437',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  link2: {
    color: '#199e4a',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
}); 
=======
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Image
        source={require('../assets/logo.jpg')} // ou use uma imagem do expo
        className="w-48 h-48 mb-6"
        resizeMode="contain"
      />

      <Text className="w-full text-gray-700 mb-1">E-mail</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        className="w-full bg-gray-200 p-3 rounded mb-3"
      />

      <Text className="w-full text-gray-700 mb-1">Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        className="w-full bg-gray-200 p-3 rounded mb-2"
      />

      <TouchableOpacity className="self-end mb-4">
        <Text className="text-green-600 text-sm">Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(drawer)/(tabs)')}
      className="bg-green-600 w-1/2 py-3 rounded mb-4">
        <Text className="text-white text-center font-bold">ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register-option')}>
        <Text className="text-green-700 underline">Ainda não possui cadastro? Pressione aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
>>>>>>> 2503c8c (a)
