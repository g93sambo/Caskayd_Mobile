import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ChatPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>Caskayd</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    }});

export default ChatPage;