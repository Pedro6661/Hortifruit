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
import { useRouter } from 'expo-router';

function CustomCheckBox({ value, onValueChange }: { value: boolean; onValueChange: (v: boolean) => void }) {
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

  const handleNascimentoChange = (text: string) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

    let formatted = cleaned;
    if (cleaned.length >= 5) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    } else if (cleaned.length >= 3) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }

    setNascimento(formatted);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
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
            onChangeText={handleNascimentoChange}
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

          <TouchableOpacity style={styles.btnCriar}>
            <Text style={styles.btnText}>CRIAR CONTA</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text style={styles.link2}>Já possui conta? Entrar</Text>
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
    paddingBottom: 100,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 24,
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
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 18,
    fontSize: 16,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
    width: '100%',
  },
  checkboxBox: {
    marginTop: 3,
    marginRight: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
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
    fontSize: 16,
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
    backgroundColor: '#199e4a',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link2: {
    color: '#199e4a',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 15,
    marginBottom: 80,
  },
});
