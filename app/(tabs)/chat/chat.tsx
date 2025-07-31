import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ChatPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Caskayd Header */}
        <Text style={styles.headerTitle}>Caskayd</Text>
        <View style={styles.headerIcons}>
          {/* Search and more icons */}
          <Text style={styles.iconPlaceholder}>🔍</Text>
          <Text style={styles.iconPlaceholder}>⋮</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        {/* Tab navigation */}
        <TouchableOpacity style={[styles.tabButton, styles.selectedTab]}>
          <Text style={styles.selectedTabText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Requests</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chatListContainer}>
        {/* Actual chat list items */}
        <Text style={styles.emptyListText}>No chats yet. Start a conversation!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconPlaceholder: {
    fontSize: 24,
    marginLeft: 15,
    color: '#555',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedTab: {
    backgroundColor: '#8a2be2',
  },
  tabButtonText: {
    color: '#555',
    fontWeight: '600',
  },
  selectedTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  chatListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 16,
    color: '#888',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navIcon: {
    fontSize: 28,
    color: '#888',
  },
});

export default ChatPage;