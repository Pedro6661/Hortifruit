import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmarCodigoScreen() {
  const router = useRouter();
  const [codigo, setCodigo] = useState(['', '', '', '', '', '']);
  const inputs = Array.from({ length: 6 }, () => useRef(null));

  const handleChange = (text, idx) => {
    if (/^[0-9]?$/.test(text)) {
      const novoCodigo = [...codigo];
      novoCodigo[idx] = text;
      setCodigo(novoCodigo);
      if (text && idx < 5) {
        inputs[idx + 1].current.focus();
      }
    }
  };

  const handleConfirmar = () => {
    if (codigo.some((c) => c === '')) {
      Alert.alert('Erro', 'Preencha todos os campos do código.');
      return;
    }
    // Aqui você pode validar o código
    // Alert.alert('Sucesso', 'Código confirmado!');
    router.push('/redefinir-senha');
  };

  const handleReenviar = () => {
    // Lógica para reenviar o código
    Alert.alert('Código reenviado', 'Verifique seu e-mail novamente.');
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
          Informe o código enviado para seu e-mail:
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 24 }}>
          {codigo.map((valor, idx) => (
            <TextInput
              key={idx}
              ref={inputs[idx]}
              style={{
                width: 44,
                height: 44,
                backgroundColor: '#ddd',
                borderRadius: 8,
                marginHorizontal: 4,
                textAlign: 'center',
                fontSize: 22,
                color: '#222',
              }}
              maxLength={1}
              keyboardType="numeric"
              value={valor}
              onChangeText={(text) => handleChange(text, idx)}
              returnKeyType={idx === 5 ? 'done' : 'next'}
              onSubmitEditing={() => idx < 5 && inputs[idx + 1].current.focus()}
            />
          ))}
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#ddd', borderRadius: 6, paddingVertical: 14, width: '80%', marginBottom: 10 }}
          onPress={handleConfirmar}
        >
          <Text style={{ color: '#111', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>CONFIRMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReenviar}>
          <Text style={{ color: 'green', textDecorationLine: 'underline', marginTop: 10 }}>
            Não recebeu o código? Reenviar.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 