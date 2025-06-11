import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { MaskedTextInput } from 'react-native-mask-text';
import Checkbox from 'expo-checkbox';

export default function RegisterBuyerScreen() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    cpf: '',
    nome: '',
    endereco: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    senha: '',
  });

  const [concordaTermos, setConcordaTermos] = useState(false);
  const [concordaPrivacidade, setConcordaPrivacidade] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = () => {
    return (
      formData.cpf.trim() !== '' &&
      formData.nome.trim() !== '' &&
      formData.endereco.trim() !== '' &&
      formData.dataNascimento.trim() !== '' &&
      formData.telefone.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.senha.trim() !== '' &&
      concordaTermos &&
      concordaPrivacidade
    );
  };

  const handleRegister = async () => {
    if (!isFormValid()) {
      Alert.alert('Erro', 'Preencha todos os campos e aceite os termos.');
      return;
    }

    setLoading(true);

    try {
      await axios.post('http://192.168.15.111:3000/compradores', formData);
      Alert.alert('Cadastro concluído', 'Sua conta foi criada com sucesso.');
      router.replace('/login');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível concluir o cadastro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-white"
      keyboardVerticalOffset={90}
    >
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 100 }}>
        <Text className="text-2xl font-bold mb-6 text-center">Cadastro de Comprador</Text>

        <Text className="mb-1 text-gray-700">CPF</Text>
        <MaskedTextInput
          mask="999.999.999-99"
          keyboardType="numeric"
          value={formData.cpf}
          onChangeText={(value) => setFormData({ ...formData, cpf: value })}
          className="bg-gray-200 p-3 rounded mb-4"
          placeholder="000.000.000-00"
        />

        <Text className="mb-1 text-gray-700">Nome</Text>
        <TextInput
          value={formData.nome}
          onChangeText={(value) => setFormData({ ...formData, nome: value })}
          className="bg-gray-200 p-3 rounded mb-4"
          placeholder="Seu nome completo"
        />

        <Text className="mb-1 text-gray-700">Endereço</Text>
        <TextInput
          value={formData.endereco}
          onChangeText={(value) => setFormData({ ...formData, endereco: value })}
          className="bg-gray-200 p-3 rounded mb-4"
          placeholder="Rua, número, bairro"
        />

        <Text className="mb-1 text-gray-700">Data de Nascimento</Text>
        <MaskedTextInput
          mask="99/99/9999"
          keyboardType="numeric"
          value={formData.dataNascimento}
          onChangeText={(value) => setFormData({ ...formData, dataNascimento: value })}
          className="bg-gray-200 p-3 rounded mb-4"
          placeholder="dd/mm/aaaa"
        />

        <Text className="mb-1 text-gray-700">Telefone</Text>
        <MaskedTextInput
          mask="(99) 99999-9999"
          keyboardType="numeric"
          value={formData.telefone}
          onChangeText={(value) => setFormData({ ...formData, telefone: value })}
          className="bg-gray-200 p-3 rounded mb-4"
          placeholder="(00) 00000-0000"
        />

        <Text className="mb-1 text-gray-700">E-mail</Text>
        <TextInput
          value={formData.email}
          onChangeText={(value) => setFormData({ ...formData, email: value })}
          className="bg-gray-200 p-3 rounded mb-4"
          placeholder="email@exemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text className="mb-1 text-gray-700">Senha</Text>
        <TextInput
          value={formData.senha}
          onChangeText={(value) => setFormData({ ...formData, senha: value })}
          className="bg-gray-200 p-3 rounded mb-4"
          placeholder="Senha"
          secureTextEntry
        />

        <View className="flex-row items-center mb-4">
          <Checkbox
            value={concordaTermos}
            onValueChange={setConcordaTermos}
            color={concordaTermos ? '#16a34a' : undefined}
          />
          <Text className="ml-2 text-sm text-gray-700">Concordo com os termos e condições</Text>
        </View>

        <View className="flex-row items-center mb-6">
          <Checkbox
            value={concordaPrivacidade}
            onValueChange={setConcordaPrivacidade}
            color={concordaPrivacidade ? '#16a34a' : undefined}
          />
          <Text className="ml-2 text-sm text-gray-700">Concordo com a política de privacidade</Text>
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          disabled={loading}
          className="bg-green-600 py-3 rounded-full items-center mb-12"
        >
          <Text className="text-white font-semibold text-base">
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
