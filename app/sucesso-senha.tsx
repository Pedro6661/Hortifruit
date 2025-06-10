import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SucessoSenhaScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 32, textAlign: 'center' }}>
        SENHA ALTERADA COM SUCESSO!
      </Text>
      <View style={{ borderWidth: 4, borderColor: '#111', borderRadius: 80, width: 120, height: 120, justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
        <Ionicons name="checkmark" size={64} color="#22d3ee" />
      </View>
      <TouchableOpacity
        style={{ backgroundColor: '#ddd', borderRadius: 6, paddingVertical: 14, width: 220, marginBottom: 10 }}
        onPress={() => router.replace('/login')}
      >
        <Text style={{ color: '#111', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>ACESSAR</Text>
      </TouchableOpacity>
    </View>
  );
} 