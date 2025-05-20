import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';

const categoryImages: Record<string, any> = {
  Frutas: require('../../assets/images/Frutas.png'),
  Legumes: require('../../assets/images/Legumes.png'),
  Verduras: require('../../assets/images/Verduras.png'),
  Temperos: require('../../assets/images/Temperos.png'),
  Laticínios: require('../../assets/images/Laticínios.png'),
  Ervas: require('../../assets/images/Ervas.png'),
  'Grãos e Cereais': require('../../assets/images/Grãos e Cereais.png'),
  Sementes: require('../../assets/images/Sementes.png'),
};

const promotionImages: Record<string, any> = {
  Alface: require('../../assets/images/Alface.png'),
  'Alho-Poro': require('../../assets/images/Alho-Poro.png'),
  Cebolinha: require('../../assets/images/Cebolinha.png'),
};

const laticiniosImages: Record<string, any> = {
  Queijos: require('../../assets/images/Cheese.png'),
  Leites: require('../../assets/images/Leite.png'),
  Iogurtes: require('../../assets/images/iorgute.png'),
};

const destaqueImages: Record<string, any> = {
  Morango: require('../../assets/images/morango.png'),
  Banana: require('../../assets/images/bananas.png'),
  Tomate: require('../../assets/images/tomato.png'),
};

const laticiniosData = [
  { name: 'Leites', image: destaqueImages['Leites'] },
  { name: 'Morango', image: destaqueImages['morango'] },
  { name: 'Tomate', image: destaqueImages['tomato'] },
];

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, João</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Pesquise aqui!" />
        </View>

        {/* Categorias */}
        <View style={styles.categories}>
          {Object.keys(categoryImages).map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Image source={categoryImages[category]} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Destaques da Semana */}
        <Text style={styles.sectionTitle}>Destaques da Semana</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.promotionsContainer}
          style={styles.horizontalScroll}
        >
          {Object.keys(destaqueImages).map((item, index) => (
            <TouchableOpacity key={index} style={styles.promotionItem}>
              <Image source={destaqueImages[item]} style={styles.categoryImage} />
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Promoções de Hortaliças */}
        <Text style={styles.sectionTitle}>Promoções de Hortaliças</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.promotionsContainer}
          style={styles.horizontalScroll}
        >
          {['Alface', 'Alho-Poro', 'Cebolinha'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.promotionItem}>
              <Image source={promotionImages[item]} style={styles.categoryImage} />
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Promoções com entrega grátis */}
        <Text style={styles.sectionTitle}>Promoções com entrega grátis</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.promotionsContainer}
          style={styles.horizontalScroll}
        >
          {[
            { name: '300g Repolho verde', price: 'R$ 4,99' },
            { name: '300g Repolho roxo', price: 'R$ 7,99' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.promotionItem}>
              <Text>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Produtos Laticínios */}
        <Text style={styles.sectionTitle}>Produtos Laticínios</Text>
        <View style={styles.products}>
  {['Queijos', 'Leites', 'Iogurtes'].map((product, index) => (
    <TouchableOpacity key={index} style={styles.productItemRow}>
      <Image source={laticiniosImages[product]} style={styles.categoryLaticinios} />
      <Text style={styles.productText}>{product}</Text>
    </TouchableOpacity>
  ))}
</View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 8,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  categoryButton: {
    width: '22%',
    alignItems: 'center',
    padding: 8,
    margin: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  categoryImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  productItemRow: {
    flexDirection: 'row', // <-- Deixa lado a lado
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  
  categoryLaticinios: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 12, // Espaço entre imagem e texto
  },
  
  productText: {
    fontSize: 16,
    fontWeight: '500',
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  horizontalScroll: {
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  promotionsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  promotionItem: {
    width: 140,
    padding: 16,
    marginRight: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 4,
  },
  products: {
    marginBottom: 16,
  },
  productItem: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
});
