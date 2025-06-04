import { Drawer } from 'expo-router/drawer';

export default function VendedorDrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          title: 'Painel de Desempenho',
        }}
      />
      <Drawer.Screen
        name="adicionar-produto"
        options={{
          title: 'Adicionar Produto',
        }}
      />
      <Drawer.Screen
        name="pedidos-recentes"
        options={{
          title: 'Pedidos Recentes',
        }}
      />
      {/* Exemplo de outras opções:
      <Drawer.Screen name="produtos" options={{ title: 'Produtos' }} />
      <Drawer.Screen name="sair" options={{ title: 'Sair' }} />
      */}
    </Drawer>
  );
} 