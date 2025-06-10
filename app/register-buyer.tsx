import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function RegisterBuyer() {
  const router = useRouter();

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [receiveOffers, setReceiveOffers] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    email: '',
    confirmEmail: '',
    password: ''
  });

  const formatDate = (text: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = text.replace(/\D/g, '');
    
    // Aplica a máscara dd/mm/yyyy
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 4) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    } else {
      return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
    }
  };

  const validateDate = (date: string) => {
    const [day, month, year] = date.split('/').map(Number);
    
    if (!day || !month || !year) return false;
    
    const dateObj = new Date(year, month - 1, day);
    
    return (
      dateObj.getDate() === day &&
      dateObj.getMonth() === month - 1 &&
      dateObj.getFullYear() === year &&
      year >= 1900 &&
      year <= new Date().getFullYear()
    );
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const hasMinLength = password.length >= 6;
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    
    return hasMinLength && hasNumber && hasLetter;
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'birthDate') {
      const formattedDate = formatDate(value);
      setFormData(prev => ({
        ...prev,
        [field]: formattedDate
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.birthDate || !formData.email || !formData.confirmEmail || !formData.password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return false;
    }

    if (!validateDate(formData.birthDate)) {
      Alert.alert('Erro', 'Por favor, insira uma data válida no formato dd/mm/yyyy');
      return false;
    }

    if (!validateEmail(formData.email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido');
      return false;
    }

    if (formData.email !== formData.confirmEmail) {
      Alert.alert('Erro', 'Os e-mails não coincidem');
      return false;
    }

    if (!validatePassword(formData.password)) {
      Alert.alert(
        'Erro', 
        'A senha deve conter no mínimo 6 caracteres, incluindo pelo menos um número e uma letra'
      );
      return false;
    }

    if (!agreeTerms) {
      Alert.alert('Erro', 'Você precisa concordar com os termos de uso');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push('/(drawer)/(tabs)');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-5 pt-12 gap-4">
      <TouchableOpacity onPress={() => router.back()} className="mb-6">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View className='flex gap-4 '>
        <Text className="text-center font-extrabold mb-7 font">
          PREENCHA OS CAMPOS PARA CRIAR SUA CONTA
        </Text>

        <View className="mb-3">
          <Text className="mb-1 font-bold text-sm">Nome *</Text>
          <TextInput 
            placeholder="Digite seu nome" 
            className="bg-gray-200 p-3 rounded"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
        </View>

        <View className="mb-3">
          <Text className="mb-1 font-bold text-sm">Data de nascimento *</Text>
          <TextInput 
            placeholder="dd/mm/yyyy" 
            className="bg-gray-200 p-3 rounded"
            value={formData.birthDate}
            onChangeText={(value) => handleInputChange('birthDate', value)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        <View className="mb-3">
          <Text className="mb-1 font-bold text-sm">Informe seu e-mail *</Text>
          <TextInput 
            placeholder="exemplo@email.com" 
            className="bg-gray-200 p-3 rounded"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-3">
          <Text className="mb-1 font-bold text-sm">Confirme seu e-mail *</Text>
          <TextInput 
            placeholder="exemplo@email.com" 
            className="bg-gray-200 p-3 rounded"
            value={formData.confirmEmail}
            onChangeText={(value) => handleInputChange('confirmEmail', value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-3">
          <Text className="mb-1 font-bold text-sm">Defina uma senha de acesso *</Text>
          <TextInput 
            placeholder="Mínimo 6 caracteres, 1 número e 1 letra" 
            secureTextEntry 
            className="bg-gray-200 p-3 rounded"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
          />
          <Text className="text-xs text-gray-500 mt-1">
            A senha deve conter no mínimo 6 caracteres, incluindo pelo menos um número e uma letra
          </Text>
        </View>
      </View>

      <View className="flex-row items-center space-x-2 mb-2 gap-2 top-5">
        <Checkbox value={agreeTerms} onValueChange={setAgreeTerms} />
        <Text className="text-sm">
          Li e concordo com os{' '}
          <Text className="text-blue-600 underline">termos de uso</Text> e{' '}
          <Text className="text-blue-600 underline">políticas da [nome do app]</Text>. *
        </Text>
      </View>

      <View className="flex-row items-center space-x-2 mb-4 gap-2 top-5">
        <Checkbox value={receiveOffers} onValueChange={setReceiveOffers} />
        <Text className="text-sm">
          Desejo receber ofertas e avisos de campanhas em meu e-mail.
        </Text>
      </View>
      <View className='flex items-center top-10'>
        <TouchableOpacity 
          onPress={handleSubmit}
          className="bg-gray-300 w-4/6 py-3 rounded mb-4 items-center">
          <Text className="text-center font-bold">CRIAR CONTA</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text className="text-green-700 underline text-center text-sm">
            Já possui conta? Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
