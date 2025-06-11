import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';
import axios from 'axios';

export default function Perfil() {
  const router = useRouter();

  const [editando, setEditando] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    dataNascimento: '',
    telefone: '',
    email: '',
  });

  useEffect(() => {
    // Buscar dados do comprador (ajuste a URL e ID conforme necessário)
    axios
      .get('http://localhost:3000/comprador/dev_ID_DO_COMPRADOR')
      .then((res) => setFormData(res.data))
      .catch((err) => Alert.alert('Erro', 'Não foi possível carregar os dados do perfil'));
  }, []);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-white"
      keyboardVerticalOffset={90}
    >
      <ScrollView
        className="flex-1 px-4 pt-16"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Cabeçalho */}
        <View className="flex-row items-center mb-8">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color="#111827" />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-2xl font-bold text-gray-800">
            Meu Perfil
          </Text>
          <View className="w-8" />
        </View>

        {/* Avatar e Nome */}
        <View className="items-center mb-8">
          <View className="w-28 h-28 rounded-full border-2 border-green-500 items-center justify-center bg-gray-100 shadow-md">
            <Ionicons name="person" size={64} color="#374151" />
          </View>
          <Text className="mt-3 text-2xl font-extrabold text-gray-800">{formData.nome}</Text>
        </View>

        {/* Formulário de Perfil */}
        <View className="bg-gray-50 rounded-2xl shadow-lg px-6 py-6 mb-8">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Informações Pessoais</Text>

          {[
            { label: 'CPF', key: 'cpf', icon: 'credit-card' },
            { label: 'Nome', key: 'nome', icon: 'user' },
            { label: 'Data de Nascimento', key: 'dataNascimento', icon: 'calendar' },
            { label: 'Endereço', key: 'endereco', icon: 'home' },
            { label: 'Telefone', key: 'telefone', icon: 'phone' },
            { label: 'Email', key: 'email', icon: 'mail' },
          ].map(({ label, key, icon }) => (
            <View className="mb-4" key={key}>
              <Text className="text-sm font-medium text-gray-700 mb-2">{label}</Text>
              <View className="flex-row items-center bg-white rounded-xl border border-gray-200 focus-within:border-green-500 px-4 py-3 shadow-sm">
                <Feather name={icon as any} size={18} color="#6B7280" />
                <TextInput
                  className="flex-1 ml-3 text-sm text-gray-800 p-0"
                  value={formData[key as keyof typeof formData]}
                  onChangeText={(value) => handleChange(key, value)}
                  placeholder={`Digite seu ${label.toLowerCase()}`}
                  placeholderTextColor="#9CA3AF"
                  editable={editando}
                  keyboardType={key === 'telefone' || key === 'cpf' ? 'numeric' : 'default'}
                />
              </View>
            </View>
          ))}

          <TouchableOpacity
            onPress={() => {
              if (editando) {
                // Aqui você pode chamar a API para atualizar o perfil
                Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
              }
              setEditando(!editando);
            }}
            className="bg-green-600 py-3 rounded-full items-center mb-2 shadow-md"
          >
            <Text className="text-white font-semibold text-base">{editando ? 'Salvar' : 'Atualizar'}</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de logout */}
        <TouchableOpacity
          onPress={() => router.replace('/login')}
          className="bg-green-600 py-3 rounded-full items-center shadow-lg mb-6 mx-8"
        >
          <Text className="text-white font-semibold text-base">Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
