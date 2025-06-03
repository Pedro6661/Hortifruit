import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // <== Certifique-se de instalar isso

export default function CadastroVendedor() {
  const [nomeNegocio, setNomeNegocio] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={styles.titulo}>PREENCHA OS CAMPOS PARA CRIAR SUA CONTA</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome do seu negócio"
            value={nomeNegocio}
            onChangeText={setNomeNegocio}
          />
          <TextInput
            style={styles.input}
            placeholder="000.000.000/0000-00"
            value={cnpj}
            onChangeText={setCnpj}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="00000-000"
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o logradouro"
            value={logradouro}
            onChangeText={setLogradouro}
          />
          <TextInput
            style={styles.input}
            placeholder="Número"
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Bairro"
            value={bairro}
            onChangeText={setBairro}
          />
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            value={cidade}
            onChangeText={setCidade}
          />

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={estado}
              onValueChange={(itemValue) => setEstado(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione um estado" value="" />
              {estados.map((uf) => (
                <Picker.Item key={uf} label={uf} value={uf} />
              ))}
            </Picker>
          </View>

          <TouchableOpacity style={styles.btnCadastrar}>
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 80,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 14,
    marginBottom: 18,
    fontSize: 16,
    width: '100%',
  },
  pickerContainer: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 18,
    width: '100%',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  btnCadastrar: {
    backgroundColor: '#199e4a',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
