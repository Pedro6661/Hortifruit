import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const categorias = {
    Frutas: ['Banana', 'Maçã', 'Uva', 'Melancia', 'Manga'],
    Legumes: ['Cenoura', 'Batata', 'Abobrinha', 'Beterraba'],
    Laticínios: ['Leite', 'Queijo', 'Iogurte', 'Manteiga'],
    Verduras: ['Alface', 'Couve', 'Rúcula', 'Espinafre'],
    Cereais: ['Arroz', 'Aveia', 'Trigo', 'Milho'],
  };

  const renderCategoria = (titulo: string, itens: string[]) => (
    <View key={titulo} style={styles.section}>
      <Text style={styles.sectionTitle}>{titulo}</Text>
      <View style={styles.itemsContainer}>
        {itens.map((item) => (
          <TouchableOpacity key={item} style={styles.itemButton} onPress={() => alert(`${item} selecionado`)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>🌿 Bem-vindo ao HortFruit!</Text>

      {Object.entries(categorias).map(([titulo, itens]) => renderCategoria(titulo, itens))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#199e4a',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#199e4a',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  itemButton: {
    backgroundColor: '#ddf5e5',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#199e4a',
    fontWeight: '500',
  },
});
