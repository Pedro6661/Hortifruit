import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RecuperarSenhaScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleEnviarCodigo = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, preencha o e-mail cadastrado.');
      return;
    }
    // Aqui você pode adicionar a lógica para enviar o código de redefinição
    // Alert.alert('Sucesso', 'Se o e-mail estiver cadastrado, um código será enviado.');
    router.push('/confirmar-codigo');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 60 }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 32 }} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="#222" />
        <Text style={{ color: '#222', fontSize: 16, marginLeft: 4 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 16, textAlign: 'center' }}>RECUPERAR SENHA</Text>
        <Text style={{ color: '#222', textAlign: 'center', marginBottom: 18 }}>
          Informe seu e-mail cadastro para enviar um código de redefinição de senha abaixo:
        </Text>
        <View style={{ width: '100%', marginBottom: 8 }}>
          <Text style={{ color: '#222', marginBottom: 4 }}>E-mail cadastrado</Text>
          <TextInput
            style={{ backgroundColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16 }}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#ddd', borderRadius: 6, paddingVertical: 14, width: '80%', marginTop: 18, marginBottom: 10 }}
          onPress={handleEnviarCodigo}
        >
          <Text style={{ color: '#111', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>ENVIAR CÓDIGO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:suporte@hortifruit.com')}>
          <Text style={{ color: 'green', textDecorationLine: 'underline', marginTop: 10 }}>
            Entre em contato com o suporte
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 