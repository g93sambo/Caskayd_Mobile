import { MaterialIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ChatPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
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
                <View style={styles.toggleMenuContainer}>
                    <TouchableOpacity>
                        <Text>Chats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Requests</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        padding: 34,
      
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    maskedViewContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
    },
    headerTitle: {
        fontSize: 34,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        height: 80,
    },
    headerIcon: {
        marginLeft: 15,
    },
    toggleMenuContainer: {}});

export default ChatPage;