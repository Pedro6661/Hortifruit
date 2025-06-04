import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

function CustomCheckBox({ value, onValueChange }: { value: boolean, onValueChange: (v: boolean) => void }) {
  return (
    <TouchableOpacity onPress={() => onValueChange(!value)} style={styles.checkboxBox}>
      <View style={[styles.checkbox, value && styles.checkboxChecked]}>
        {value && <Text style={styles.checkboxTick}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
}

export default function CadastroComprador() {
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirma, setEmailConfirma] = useState('');
  const [senha, setSenha] = useState('');
  const [termos, setTermos] = useState(false);
  const [ofertas, setOfertas] = useState(false);
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
      <TouchableOpacity style={styles.voltar} onPress={() => router.back()}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.titulo}>PREENCHA OS CAMPOS PARA CRIAR SUA CONTA</Text>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/yyyy"
          value={nascimento}
          onChangeText={setNascimento}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Informe seu e-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Confirme seu e-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          value={emailConfirma}
          onChangeText={setEmailConfirma}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Defina uma senha de acesso</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <View style={styles.checkboxContainer}>
          <CustomCheckBox value={termos} onValueChange={setTermos} />
          <Text style={styles.checkboxLabel}>
            Li e concordo com os <Text style={styles.link}>termos de uso</Text> e <Text style={styles.link}>políticas da [nome do app]</Text>.
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CustomCheckBox value={ofertas} onValueChange={setOfertas} />
          <Text style={styles.checkboxLabel}>Desejo receber ofertas e avisos de campanhas em meu e-mail.</Text>
        </View>
        <TouchableOpacity style={styles.btnCriar} disabled>
          <Text style={styles.btnCriarText}>CRIAR CONTA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text style={styles.link2}>Já possui conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  voltar: {
    marginLeft: 16,
    marginTop: 40,
    marginBottom: 10,
  },
  voltarText: {
    fontSize: 18,
    color: '#222',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 18,
    marginTop: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    marginLeft: 2,
    color: '#222',
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 15,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    width: '100%',
  },
  checkboxBox: {
    marginTop: 2,
    marginRight: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#888',
    borderRadius: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#199e4a',
    borderColor: '#199e4a',
  },
  checkboxTick: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: '#222',
    marginLeft: 8,
  },
  link: {
    color: '#0000ee',
    textDecorationLine: 'underline',
  },
  btnCriar: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
  },
  btnCriarText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 17,
  },
  link2: {
    color: '#199e4a',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 15,
    marginBottom: 60,
  },
}); 