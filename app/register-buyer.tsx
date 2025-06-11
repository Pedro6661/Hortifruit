import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, ActivityIndicator } from 'react-native';
import Checkbox from 'expo-checkbox';
import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text';
import { router } from 'expo-router';

const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
const validateCPF = (cpf: string) => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf);
const validateDate = (date: string) => /^\d{2}\/\d{2}\/\d{4}$/.test(date);

const formatDateToISO = (date: string) => {
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}`;
};

export default function RegisterBuyerScreen() {
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
      validateCPF(formData.cpf) &&
      formData.nome.trim() !== '' &&
      formData.endereco.trim() !== '' &&
      validateDate(formData.dataNascimento) &&
      formData.telefone.trim().length >= 14 &&
      validateEmail(formData.email) &&
      formData.senha.length >= 6 &&
      concordaTermos &&
      concordaPrivacidade
    );
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = async () => {
    if (!isFormValid()) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente e aceite os termos.');
      return;
    }

    setLoading(true);

    const payload = {
      ...formData,
      dataNascimento: formatDateToISO(formData.dataNascimento),
    };

    try {
      await axios.post('http://10.0.2.2:3000/compradores', payload);
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
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text>CPF:</Text>
      <TextInputMask
        type={'cpf'}
        value={formData.cpf}
        onChangeText={(text) => handleChange('cpf', text)}
        placeholder="000.000.000-00"
        keyboardType="numeric"
      />

      <Text>Nome:</Text>
      <TextInput value={formData.nome} onChangeText={(text) => handleChange('nome', text)} placeholder="Nome completo" />

      <Text>Endereço:</Text>
      <TextInput value={formData.endereco} onChangeText={(text) => handleChange('endereco', text)} placeholder="Endereço" />

      <Text>Data de nascimento:</Text>
      <TextInputMask
        type={'datetime'}
        options={{ format: 'DD/MM/YYYY' }}
        value={formData.dataNascimento}
        onChangeText={(text) => handleChange('dataNascimento', text)}
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
      />

      <Text>Telefone:</Text>
      <TextInputMask
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
        value={formData.telefone}
        onChangeText={(text) => handleChange('telefone', text)}
        placeholder="(00) 00000-0000"
        keyboardType="phone-pad"
      />

      <Text>Email:</Text>
      <TextInput value={formData.email} onChangeText={(text) => handleChange('email', text)} placeholder="email@exemplo.com" keyboardType="email-address" />

      <Text>Senha:</Text>
      <TextInput
        value={formData.senha}
        onChangeText={(text) => handleChange('senha', text)}
        placeholder="Mínimo 6 dígitos"
        secureTextEntry
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <Checkbox value={concordaTermos} onValueChange={setConcordaTermos} />
        <Text> Aceito os termos de uso</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <Checkbox value={concordaPrivacidade} onValueChange={setConcordaPrivacidade} />
        <Text> Aceito a política de privacidade</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Cadastrar" onPress={handleRegister} />
      )}
    </ScrollView>
  );
}
