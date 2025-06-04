// src/components/CustomDrawerContent.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const menuItems = [
  'Início',
  'Busca',
  'Perfil',
  'Sacola',
  'Notificações',
  'Configurações',
];

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, paddingHorizontal: 20, paddingTop: 40 }}>
      <View className="items-center mb-8">
        <Image source={require('../assets/logo.jpg')} style={{ width: 100, height: 100 }} resizeMode="contain" />
      </View>

      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} className="py-2 border-b border-gray-300">
          <Text className="text-base">{item}</Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
}
