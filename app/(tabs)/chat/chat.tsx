import { MaterialIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ChatPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <MaskedView style={styles.maskedViewContainer} maskElement={<Text style={styles.headerTitle}>Caskayd</Text>}>
                    <LinearGradient
                        colors={['#ad8995', '#a44576', '#998a87']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={StyleSheet.absoluteFill}
                    />
                </MaskedView>
                <View style={styles.headerIcons}>
                    <MaterialIcons name="search" size={28} color="#555" style={styles.headerIcon} />
                    <MaterialIcons name="more-vert" size={28} color="#555" style={styles.headerIcon} />
                </View>
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
    maskedViewContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    headerIcon: {
        marginLeft: 15,
    }});

export default ChatPage;