import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Função para formatar valor monetário
function formatarPreco(valor: string) {
  // Remove tudo que não for número
  let num = valor.replace(/[^0-9]/g, '');
  if (num.length === 0) return '';
  if (num.length === 1) return 'R$ 0,0' + num;
  if (num.length === 2) return 'R$ 0,' + num;
  return 'R$ ' + (parseInt(num.slice(0, -2)).toLocaleString('pt-BR')) + ',' + num.slice(-2);
}

export default function AdicionarProdutoScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [produtos, setProdutos] = useState<{ nome: string; preco: number; quantidade: number }[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const adicionarProduto = () => {
    if (!nome || !preco || quantidade < 1) return;
    // Extrai o valor numérico do preço formatado
    const precoNumerico = parseFloat(preco.replace(/[^0-9]/g, '')) / 100;
    const novoProduto = { nome, preco: precoNumerico, quantidade };
    if (editIndex !== null) {
      const novosProdutos = [...produtos];
      novosProdutos[editIndex] = novoProduto;
      setProdutos(novosProdutos);
      setEditIndex(null);
    } else {
      setProdutos([...produtos, novoProduto]);
    }
    setNome('');
    setPreco('');
    setQuantidade(1);
  };

  const editarProduto = (index: number) => {
    const produto = produtos[index];
    setNome(produto.nome);
    setPreco(produto.preco.toString());
    setQuantidade(produto.quantidade);
    setEditIndex(index);
  };

  const excluirProduto = (index: number) => {
    const novosProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(novosProdutos);
    setEditIndex(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => router.replace('/(drawer)/vendedor/(tabs)/vendedor-home')}
      >
        <Ionicons name="arrow-back" size={22} color="#22c55e" style={{ marginRight: 4 }} />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Adicionar Produtos</Text>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Adicionar Produtos</Text>
        <View style={styles.rowHeader}>
          <Text style={styles.headerText}>Nome</Text>
          <Text style={styles.headerText}>Preço</Text>
          <Text style={styles.headerText}>Qtd</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.inputNome}
            placeholder="produto"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.inputPreco}
            placeholder="R$ 0,00"
            value={preco}
            onChangeText={text => {
              // Remove tudo que não for número
              let num = text.replace(/[^0-9]/g, '');
              // Limita o tamanho para evitar valores absurdos
              if (num.length > 8) num = num.slice(0, 8);
              setPreco(formatarPreco(num));
            }}
            keyboardType="numeric"
          />
          <View style={styles.qtdBox}>
            <TouchableOpacity onPress={() => setQuantidade(Math.max(1, quantidade - 1))}>
              <Text style={styles.qtdBtn}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={[styles.qtdText, { width: 32, textAlign: 'center', backgroundColor: '#fff', borderRadius: 4 }]}
              value={quantidade.toString()}
              keyboardType="numeric"
              onChangeText={text => {
                const num = parseInt(text.replace(/\D/g, ''));
                setQuantidade(isNaN(num) || num < 1 ? 1 : num);
              }}
            />
            <TouchableOpacity onPress={() => setQuantidade(quantidade + 1)}>
              <Text style={styles.qtdBtn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={adicionarProduto}>
          <Text style={styles.addBtnText}>{editIndex !== null ? 'SALVAR' : 'ADICIONAR'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Produtos Adicionados</Text>
        <View style={styles.rowHeader}>
          <Text style={styles.headerText}>Nome</Text>
          <Text style={styles.headerText}>Preço</Text>
          <Text style={styles.headerText}>Qtd</Text>
        </View>
        <FlatList
          data={produtos}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.row}>
              <Text style={styles.itemText}>{item.nome}</Text>
              <Text style={styles.itemText}>R$ {item.preco.toFixed(2)}</Text>
              <Text style={styles.itemText}>{item.quantidade}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto adicionado</Text>}
        />
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => editIndex !== null ? setEditIndex(null) : editarProduto(produtos.length - 1)}
            disabled={produtos.length === 0}
          >
            <Text style={styles.editBtnText}>EDITAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => excluirProduto(produtos.length - 1)}
            disabled={produtos.length === 0}
          >
            <Text style={styles.deleteBtnText}>EXCLUIR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingTop: 100 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#222', marginBottom: 10 },
  backBtn: { position: 'absolute', top: 40, left: 20, padding: 8, flexDirection: 'row', alignItems: 'center' },
  backText: { color: '#22c55e', fontSize: 16, fontWeight: 'bold' },
  box: { backgroundColor: '#d3e1dd', borderRadius: 12, padding: 12, width: '90%', marginVertical: 10 },
  boxTitle: { fontWeight: 'bold', marginBottom: 6 },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  headerText: { flex: 1, fontWeight: 'bold', textAlign: 'center' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  inputNome: { flex: 1, backgroundColor: '#fff', borderRadius: 6, padding: 6, marginRight: 4 },
  inputPreco: { flex: 1, backgroundColor: '#fff', borderRadius: 6, padding: 6, marginHorizontal: 4 },
  qtdBox: { flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' },
  qtdBtn: { fontSize: 18, fontWeight: 'bold', color: '#222', marginHorizontal: 8 },
  qtdText: { fontSize: 16, fontWeight: 'bold' },
  addBtn: { backgroundColor: '#8fd6a5', borderRadius: 8, padding: 10, marginTop: 8, alignItems: 'center' },
  addBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  itemText: { flex: 1, textAlign: 'center' },
  emptyText: { textAlign: 'center', color: '#888', marginVertical: 8 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  editBtn: { backgroundColor: '#a3bcd6', borderRadius: 8, padding: 10, flex: 1, marginRight: 8, alignItems: 'center' },
  editBtnText: { color: '#fff', fontWeight: 'bold' },
  deleteBtn: { backgroundColor: '#d68f8f', borderRadius: 8, padding: 10, flex: 1, marginLeft: 8, alignItems: 'center' },
  deleteBtnText: { color: '#fff', fontWeight: 'bold' },
});
