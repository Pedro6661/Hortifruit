import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import CheckBox from '@react-native-community/checkbox';

const estados = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export default function CadastroVendedor() {
  const router = useRouter();
  const [form, setForm] = useState({
    nomeNegocio: '',
    cnpj: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    semNumero: false,
    complemento: '',
    contato: '',
    uf: '',
    emailConfirm: '',
    senha: '',
    termos: false,
    ofertas: false,
  });

  function handleChange(field: string, value: any) {
    setForm({ ...form, [field]: value });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <TouchableOpacity style={styles.voltar} onPress={() => router.back()}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>PREENCHA OS CAMPOS PARA CRIAR SUA CONTA</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do seu negócio"
        value={form.nomeNegocio}
        onChangeText={text => handleChange('nomeNegocio', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="000.000.000/0000-00"
        value={form.cnpj}
        onChangeText={text => handleChange('cnpj', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        value={form.email}
        onChangeText={text => handleChange('email', text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="00000-000"
        value={form.cep}
        onChangeText={text => handleChange('cep', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o logradouro"
        value={form.logradouro}
        onChangeText={text => handleChange('logradouro', text)}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="000"
          value={form.numero}
          onChangeText={text => handleChange('numero', text)}
          keyboardType="numeric"
        />
        <CheckBox
          value={form.semNumero}
          onValueChange={(value: boolean) => handleChange('semNumero', value)}
        />
        <Text style={{ marginLeft: 4 }}>Não tem número.</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Próximo à esquina..."
        value={form.complemento}
        onChangeText={text => handleChange('complemento', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="(00) 00000-0000"
        value={form.contato}
        onChangeText={text => handleChange('contato', text)}
        keyboardType="phone-pad"
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={form.uf}
          onValueChange={value => handleChange('uf', value)}
          style={styles.picker}
        >
          <Picker.Item label="Selecione" value="" />
          {estados.map(uf => (
            <Picker.Item key={uf} label={uf} value={uf} />
          ))}
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        value={form.emailConfirm}
        onChangeText={text => handleChange('emailConfirm', text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={form.senha}
        onChangeText={text => handleChange('senha', text)}
        secureTextEntry
      />
      <View style={styles.checkboxRow}>
        <CheckBox
          value={form.termos}
          onValueChange={(value: boolean) => handleChange('termos', value)}
        />
        <Text>
          Li e concordo com os <Text style={styles.link}>termos de uso</Text> e <Text style={styles.link}>políticas da [nome do app]</Text>.
        </Text>
      </View>
      <View style={styles.checkboxRow}>
        <CheckBox
          value={form.ofertas}
          onValueChange={(value: boolean) => handleChange('ofertas', value)}
        />
        <Text>Desejo receber ofertas e avisos de campanhas em meu e-mail.</Text>
      </View>
      <TouchableOpacity style={styles.botao} onPress={() => {/* lógica de cadastro */}}>
        <Text style={styles.botaoTexto}>CRIAR CONTA</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace('/login')}>
        <Text style={styles.linkEntrar}>Já possui conta? <Text style={{ color: 'green' }}>Entrar</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  voltar: { marginBottom: 10 },
  voltarText: { fontSize: 18, color: '#222' },
  titulo: { fontWeight: 'bold', fontSize: 14, marginBottom: 20, textAlign: 'left' },
  input: { backgroundColor: '#e5e5e5', borderRadius: 6, padding: 10, marginBottom: 8 },
  pickerContainer: { backgroundColor: '#e5e5e5', borderRadius: 6, marginBottom: 8 },
  picker: { height: 40, width: '100%' },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  botao: { backgroundColor: '#ddd', borderRadius: 6, padding: 15, alignItems: 'center', marginTop: 15 },
  botaoTexto: { fontWeight: 'bold', color: '#222' },
  link: { color: 'blue', textDecorationLine: 'underline' },
  linkEntrar: { textAlign: 'center', marginTop: 15, color: '#222' },
});
