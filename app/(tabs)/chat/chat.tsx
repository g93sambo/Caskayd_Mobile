import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ChatPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <MaskedView maskElement={<Text style={styles.headerTitle}>Caskayd</Text>}>
                    <LinearGradient
                        colors={['#ad8995', '#a44576', '#998a87']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                </MaskedView>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        padding: 32,
      
    },
    header: {
        paddingTop: 28,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    }});

export default ChatPage;