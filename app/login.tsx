import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import axios from 'axios';

// Para emulador Android, use 10.0.2.2 no lugar de localhost
const baseURL = 'http://10.0.2.2:3000';

export default function LoginScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'buyer', // 'buyer' ou 'seller'
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (!validateEmail(formData.email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido');
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      // Aqui você pode salvar o token, se houver:
      // const token = response.data.token;

      // Redireciona com base no tipo de usuário
      if (formData.userType === 'buyer') {
        router.push('/(drawer)/(tabs)');
      } else {
        router.push('/(drawer)/vendedor/(tabs)/vendedor-home');
      }
    } catch (error) {
      console.log('Erro ao logar:', error);
      Alert.alert('Erro', 'Email ou senha inválidos');
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Image
        source={require('../assets/logo.jpg')}
        className="w-48 h-48 mb-6"
        resizeMode="contain"
      />

      <View className="w-full flex-row justify-center mb-6">
        <TouchableOpacity
          onPress={() => setFormData(prev => ({ ...prev, userType: 'buyer' }))}
          className={`px-6 py-2 rounded-l-full ${formData.userType === 'buyer' ? 'bg-green-600' : 'bg-gray-200'}`}
        >
          <Text className={`font-bold ${formData.userType === 'buyer' ? 'text-white' : 'text-gray-600'}`}>
            Comprador
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFormData(prev => ({ ...prev, userType: 'seller' }))}
          className={`px-6 py-2 rounded-r-full ${formData.userType === 'seller' ? 'bg-green-600' : 'bg-gray-200'}`}
        >
          <Text className={`font-bold ${formData.userType === 'seller' ? 'text-white' : 'text-gray-600'}`}>
            Vendedor
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="w-full text-gray-700 mb-1">E-mail</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        className="w-full bg-gray-200 p-3 rounded mb-3"
        value={formData.email}
        onChangeText={(value) => setFormData(prev => ({ ...prev, email: value }))}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text className="w-full text-gray-700 mb-1">Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        className="w-full bg-gray-200 p-3 rounded mb-2"
        value={formData.password}
        onChangeText={(value) => setFormData(prev => ({ ...prev, password: value }))}
      />

      <TouchableOpacity className="self-end mb-4" onPress={() => router.push('/recuperar-senha')}>
        <Text className="text-green-600 text-sm">Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-green-600 w-1/2 py-3 rounded mb-4"
      >
        <Text className="text-white text-center font-bold">ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register-option')}>
        <Text className="text-green-700 underline">Ainda não possui cadastro? Pressione aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
