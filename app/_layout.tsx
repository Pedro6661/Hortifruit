<<<<<<< HEAD
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'login',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="cadastro-tipo" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal',headerShown: false }} />
      </Stack>
    </ThemeProvider>
=======
import '../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack, useRouter } from 'expo-router';
import React from 'react';

function useAuth() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simula delay para carregar usuário
    setTimeout(() => {
      setUser(null); // Troque para objeto {id: '123'} para simular usuário logado
      setLoading(false);
    }, 500);
  }, []);

  return { user, loading };
}

export default function RootLayout() {
  const router = useRouter();
  const { user, loading } = useAuth();

  React.useEffect(() => {
    if (!loading) {
      if (user) {
        // Usuário logado: vai para drawer
        router.replace('/(drawer)');
      } else {
        // Usuário deslogado: vai para login
        router.replace('/login');
      }
    }
  }, [user, loading]);

  if (loading) {
    // Retorna null ou um loading screen simples
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Coloque aqui todas as suas rotas para que o Stack conheça elas */}
        <Stack.Screen name="login" options={{headerShown: false}}/>
        <Stack.Screen name="register-option" options={{headerShown: false}} />
        <Stack.Screen name="register-buyer" options={{headerShown: false}}/>
        <Stack.Screen name="register-seller" options={{headerShown: false}}/>
        <Stack.Screen name="(drawer)" options={{headerShown: false}} />
      </Stack>
    </GestureHandlerRootView>
>>>>>>> 2503c8c (a)
  );
}
