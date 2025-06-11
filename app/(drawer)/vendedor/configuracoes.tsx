import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

export default function ConfiguracoesScreen() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [notificacoes, setNotificacoes] = React.useState(true);
  const [modoEscuro, setModoEscuro] = React.useState(false);
  const [localizacao, setLocalizacao] = React.useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.menuBtn}>
          <Ionicons name="menu" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.title}>Configurações</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Seção de Notificações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notificações</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="notifications-outline" size={24} color="#3B4B47" />
            <Text style={styles.settingLabel}>Notificações de pedidos</Text>
          </View>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            trackColor={{ false: '#E3ECE8', true: '#B6CFC2' }}
            thumbColor={notificacoes ? '#3B4B47' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Seção de Aparência */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aparência</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="moon-outline" size={24} color="#3B4B47" />
            <Text style={styles.settingLabel}>Modo escuro</Text>
          </View>
          <Switch
            value={modoEscuro}
            onValueChange={setModoEscuro}
            trackColor={{ false: '#E3ECE8', true: '#B6CFC2' }}
            thumbColor={modoEscuro ? '#3B4B47' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Seção de Localização */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Localização</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="location-outline" size={24} color="#3B4B47" />
            <Text style={styles.settingLabel}>Compartilhar localização</Text>
          </View>
          <Switch
            value={localizacao}
            onValueChange={setLocalizacao}
            trackColor={{ false: '#E3ECE8', true: '#B6CFC2' }}
            thumbColor={localizacao ? '#3B4B47' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Seção de Conta */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conta</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="person-outline" size={24} color="#3B4B47" />
            <Text style={styles.settingLabel}>Editar perfil</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#3B4B47" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="lock-closed-outline" size={24} color="#3B4B47" />
            <Text style={styles.settingLabel}>Alterar senha</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#3B4B47" />
        </TouchableOpacity>
      </View>

      {/* Seção de Suporte */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Suporte</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="help-circle-outline" size={24} color="#3B4B47" />
            <Text style={styles.settingLabel}>Ajuda</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#3B4B47" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="information-circle-outline" size={24} color="#3B4B47" />
            <Text style={styles.settingLabel}>Sobre</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#3B4B47" />
        </TouchableOpacity>
      </View>

      {/* Botão de Sair */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
    paddingTop: 46,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  menuBtn: {
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#222',
  },
  placeholder: {
    width: 28,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B4B47',
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E3ECE8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: '#3B4B47',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE5E5',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
  },
}); 