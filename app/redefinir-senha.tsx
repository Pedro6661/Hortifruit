import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RedefinirSenhaScreen() {
  const router = useRouter();
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleRedefinir = () => {
    if (!senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    // Aqui você pode adicionar a lógica para redefinir a senha
    router.replace('/sucesso-senha');
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
          Informe uma nova senha:
        </Text>
        <View style={{ width: '100%', marginBottom: 8 }}>
          <Text style={{ color: '#222', marginBottom: 4 }}>Nova senha</Text>
          <TextInput
            style={{ backgroundColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 12 }}
            placeholder="Digite a nova senha"
            placeholderTextColor="#888"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <Text style={{ color: '#222', marginBottom: 4 }}>Confirme a senha</Text>
          <TextInput
            style={{ backgroundColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16 }}
            placeholder="Digite novamente a senha"
            placeholderTextColor="#888"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#ddd', borderRadius: 6, paddingVertical: 14, width: '80%', marginTop: 18, marginBottom: 10 }}
          onPress={handleRedefinir}
        >
          <Text style={{ color: '#111', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>REDEFINIR SENHA</Text>
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