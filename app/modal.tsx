import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link href="../">Fechar modal</Link>
    </View>
        
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
=======
import { Platform } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Modal() {
  return (
    <>
      <ScreenContent path="app/modal.tsx" title="Modal"></ScreenContent>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
>>>>>>> 2503c8c (a)
