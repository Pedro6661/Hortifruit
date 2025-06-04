import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // ✅ Importar aqui
import Banner from '../../../components/banner'; // ajuste o caminho conforme necessário

const categories = [
  { label: 'Frutas', icon: require('../../../assets/frutas.png') },
  { label: 'Legumes', icon: require('../../../assets/legumes.png') },
  { label: 'Verduras', icon: require('../../../assets/verduras.png') },
  { label: 'Temperos', icon: require('../../../assets/temperos.png') },
];

const offers = [
  { name: '300g repolho verde', price: 'R$ 4,99', image: require('../../../assets/Repolho verde imagme.png') },
  { name: 'Cebola (kg)', price: 'R$ 6,70', image: require('../../../assets/Cebola imagme.png') },
  { name: 'Mamão formosa', price: 'R$ 7,99', image: require('../../../assets/Mamão Formosa imagem.png') },
  { name: 'Uva roxa (kg)', price: 'R$ 8,49', image: require('../../../assets/Uva tradicional imagem.png') },
];

const stores = [
  { name: 'Verdurão - Dona Florinda', icon: require('../../../assets/sacolao1.png') },
  { name: 'Sacolão do Tonhão', icon: require('../../../assets/sacolao2.png') },
  { name: 'Quitanda - Zenon Barriga', icon: require('../../../assets/sacolao3.png') },
];

export default function HomeScreen() {
  const navigation = useNavigation(); // ✅ Usar aqui

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        {/* Cabeçalho */}
        <View className="flex-row items-center justify-between mt-4 mb-6">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={28} color="black" />
          </TouchableOpacity>

          <Text className="text-lg font-bold">Olá, João!</Text>

          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Banner principal */}
        <Banner />

        {/* Categorias */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-5">
          {categories.map((item, index) => (
            <View key={index} className="items-center mr-4">
              <Image source={item.icon} className="w-16 h-16 rounded-full bg-gray-100" />
              <Text className="mt-2 text-sm">{item.label}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Promoções */}
        <Text className="text-base font-bold mb-3">Promoções com entrega grátis</Text>
        <FlatList
          data={offers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          className="mb-5"
          renderItem={({ item }) => (
            <View className="bg-white rounded-xl shadow-md p-3 mr-3 w-32 items-center">
              <Image source={item.image} className="w-16 h-16 mb-2" />
              <Text className="text-xs text-center">{item.name}</Text>
              <Text className="text-green-600 font-bold text-sm">{item.price}</Text>
            </View>
          )}
        />

        {/* Lojas */}
        <Text className="text-base font-bold mb-3">Lojas</Text>
        {stores.map((store, index) => (
          <View key={index} className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center gap-3">
              <Image source={store.icon} className="w-10 h-10 rounded-full" />
              <Text className="text-sm">{store.name}</Text>
            </View>
            <Ionicons name="star-outline" size={20} color="black" />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
