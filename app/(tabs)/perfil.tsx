import { Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Text, View } from '@/components/Themed';

export default function Perfil() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert('Logout', 'Você saiu com sucesso.', [
      {
        text: 'OK',
        onPress: () => router.replace('/login'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Cabeçalho do Perfil */}
        <View style={styles.header}>
          <FontAwesome5 name="user-circle" size={64} color="#e32207" />
          <Text style={styles.userName}>Olá, João!</Text>
        </View>

        {/* Opções de Navegação */}
        <TouchableOpacity style={styles.option} onPress={() => router.push('/(tabs)')}>
          <MaterialIcons name="home" size={24} color="#e32207" />
          <Text style={styles.optionText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => router.push('/(tabs)/two')}>
          <MaterialIcons name="chat" size={24} color="#e32207" />
          <Text style={styles.optionText}>Conversas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => alert('Configurações')}>
          <MaterialIcons name="settings" size={24} color="#e32207" />
          <Text style={styles.optionText}>Configurações</Text>
        </TouchableOpacity>

        {/* Botão de Sair */}
        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  userName: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 12,
    color: '#333',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e32207',
    padding: 16,
    borderRadius: 12,
    marginTop: 40,
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 8,
  },
});
