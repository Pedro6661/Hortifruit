import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function RegisterSeller() {
  const router = useRouter();

  const [noNumber, setNoNumber] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [receiveOffers, setReceiveOffers] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    cnpj: '',
    email: '',
    confirmEmail: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    phone: '',
    state: '',
    password: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateCNPJ = (cnpj: string) => {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    return cnpjRegex.test(cnpj);
  };

  const validateCEP = (cep: string) => {
    const cepRegex = /^\d{5}-\d{3}$/;
    return cepRegex.test(cep);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const formatCNPJ = (text: string) => {
    const numbers = text.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`;
    if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
    if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`;
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`;
  };

  const formatCEP = (text: string) => {
    const numbers = text.replace(/\D/g, '');
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const formatPhone = (text: string) => {
    const numbers = text.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;

    switch (field) {
      case 'cnpj':
        formattedValue = formatCNPJ(value);
        break;
      case 'cep':
        formattedValue = formatCEP(value);
        break;
      case 'phone':
        formattedValue = formatPhone(value);
        break;
    }

    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
    }));
  };

  const validateForm = () => {
    if (!formData.businessName || !formData.cnpj || !formData.email || !formData.confirmEmail || 
        !formData.cep || !formData.street || !formData.phone || !formData.state || !formData.password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return false;
    }

    if (!noNumber && !formData.number) {
      Alert.alert('Erro', 'Por favor, preencha o número ou marque a opção "Não tem número"');
      return false;
    }

    if (!validateCNPJ(formData.cnpj)) {
      Alert.alert('Erro', 'Por favor, insira um CNPJ válido');
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

    if (!validateCEP(formData.cep)) {
      Alert.alert('Erro', 'Por favor, insira um CEP válido');
      return false;
    }

    if (!validatePhone(formData.phone)) {
      Alert.alert('Erro', 'Por favor, insira um telefone válido');
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
      router.push('/(drawer)/vendedor/(tabs)/vendedor-home');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5 pt-3 gap-4">
        <TouchableOpacity onPress={() => router.back()} className="mb-5">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View className="gap-3">
          <Text className="text-center font-extrabold mb-7">
            PREENCHA OS CAMPOS PARA CRIAR SUA CONTA
          </Text>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Nome do seu negócio*</Text>
            <TextInput 
              placeholder="Digite o nome do seu negócio" 
              className="bg-gray-200 p-3 rounded"
              value={formData.businessName}
              onChangeText={(value) => handleInputChange('businessName', value)}
            />
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Informe o CNPJ*</Text>
            <TextInput 
              placeholder="00.000.000/0000-00" 
              className="bg-gray-200 p-3 rounded"
              value={formData.cnpj}
              onChangeText={(value) => handleInputChange('cnpj', value)}
              keyboardType="numeric"
              maxLength={18}
            />
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Informe seu e-mail*</Text>
            <TextInput 
              placeholder="email@email.com" 
              className="bg-gray-200 p-3 rounded"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Confirme seu e-mail*</Text>
            <TextInput 
              placeholder="email@email.com" 
              className="bg-gray-200 p-3 rounded"
              value={formData.confirmEmail}
              onChangeText={(value) => handleInputChange('confirmEmail', value)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">CEP*</Text>
            <TextInput 
              placeholder="00000-000" 
              className="bg-gray-200 p-3 rounded"
              value={formData.cep}
              onChangeText={(value) => handleInputChange('cep', value)}
              keyboardType="numeric"
              maxLength={9}
            />
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Logradouro*</Text>
            <TextInput 
              placeholder="Digite o logradouro" 
              className="bg-gray-200 p-3 rounded"
              value={formData.street}
              onChangeText={(value) => handleInputChange('street', value)}
            />
          </View>

          <View className="flex-row items-center mb-3 space-x-3">
            <View className="flex-1">
              <Text className="mb-1 font-bold text-sm">Número*</Text>
              <TextInput 
                placeholder="000" 
                className="bg-gray-200 p-3 rounded"
                value={formData.number}
                onChangeText={(value) => handleInputChange('number', value)}
                keyboardType="numeric"
                editable={!noNumber}
              />
            </View>
            <View className="flex-row items-center">
              <Checkbox value={noNumber} onValueChange={setNoNumber} />
              <Text className="ml-2 text-sm">Não tem número.</Text>
            </View>
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Complemento</Text>
            <TextInput 
              placeholder="Ex: Próximo à esquina..." 
              className="bg-gray-200 p-3 rounded"
              value={formData.complement}
              onChangeText={(value) => handleInputChange('complement', value)}
            />
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Contato*</Text>
            <TextInput 
              placeholder="(00) 00000-0000" 
              className="bg-gray-200 p-3 rounded"
              value={formData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              keyboardType="numeric"
              maxLength={15}
            />
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Unidade Federativa*</Text>
            <TextInput 
              placeholder="Selecione" 
              className="bg-gray-200 p-3 rounded"
              value={formData.state}
              onChangeText={(value) => handleInputChange('state', value)}
            />
          </View>

          <View className="mb-3">
            <Text className="mb-1 font-bold text-sm">Defina uma senha de acesso*</Text>
            <TextInput 
              placeholder="Digite sua senha" 
              secureTextEntry 
              className="bg-gray-200 p-3 rounded"
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
            />
          </View>
        </View>

        <View className="flex-row items-center gap-2 top-5">
          <Checkbox value={agreeTerms} onValueChange={setAgreeTerms} />
          <Text className="text-sm">
            Li e concordo com os{' '}
            <Text className="text-blue-600 underline">termos de uso</Text> e{' '}
            <Text className="text-blue-600 underline">políticas da [nome do app]</Text>. *
          </Text>
        </View>

        <View className="flex-row items-center gap-2 top-7 mb-4">
          <Checkbox value={receiveOffers} onValueChange={setReceiveOffers} />
          <Text className="text-sm">
            Desejo receber ofertas e avisos de campanhas em meu e-mail.
          </Text>
        </View>

        <View className="flex items-center top-10 ">
          <TouchableOpacity 
            onPress={handleSubmit}
            className="bg-gray-300 w-4/6 py-3 rounded mb-4 items-center"
          >
            <Text className="font-bold">CRIAR CONTA</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text className="text-green-700 underline text-center text-sm">
              Já possui conta? Entrar
            </Text>
          </TouchableOpacity>
          <View className='flex-1 h-20' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
