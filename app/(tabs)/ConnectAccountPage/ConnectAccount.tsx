import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';

const ConnectAccount = () => {
  const router = useRouter();

  const [connected, setConnected] = useState<{ [key: string]: boolean }>({});

  const platforms = [
    {
      name: 'Facebook',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    },
    {
      name: 'X',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968830.png',
    },
    {
      name: 'Instagram',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    },
    {
      name: 'TikTok',
      icon: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png',
    },
    {
      name: 'YouTube',
      icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
    },
    {
      name: 'Snapchat',
      icon: 'https://cdn-icons-png.flaticon.com/512/3670/3670151.png',
    },
  ];

  const isAnyConnected = Object.values(connected).some(Boolean);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Back Button */}
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <AntDesign name="arrowleft" size={24} color="#843163" />
            </TouchableOpacity>
          </View>

          {/* Gradient Title */}
          <MaskedView
            maskElement={
              <Text style={[styles.gradientText, { backgroundColor: 'transparent' }]}>
                Caskayd
              </Text>
            }
          >
            <LinearGradient
              colors={['#3232A1', '#354747', '#5E3345', '#722742', '#7A254B', '#843163', '#684441']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={[styles.gradientText, { opacity: 0 }]}>Caskayd</Text>
            </LinearGradient>
          </MaskedView>

          {/* Main Heading */}
          <Text style={styles.mainHeader}>Connect your accounts</Text>
          <Text style={styles.subHeader}>You can always add more later in settings</Text>

          {/* Platform List */}
          <View style={{ width: '100%', marginTop: 30 }}>
            {platforms.map((platform, index) => (
              <View key={index} style={styles.platformRow}>
                <View style={styles.iconTextContainer}>
                  <Image source={{ uri: platform.icon }} style={styles.icon} />
                  <Text style={styles.platformName}>{platform.name}</Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.connectButton,
                    connected[platform.name] && styles.connectedButton,
                  ]}
                  onPress={() =>
                    setConnected(prev => ({
                      ...prev,
                      [platform.name]: !prev[platform.name],
                    }))
                  }
                >
                  <Text
                    style={[
                      styles.connectText,
                      connected[platform.name] && styles.connectedText,
                    ]}
                  >
                    {connected[platform.name] ? 'Connected' : 'Connect'}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Skip for Now */}
          <TouchableOpacity style={{ marginTop: 30 }}>
            <Text style={styles.skipText}>Skip for now</Text>
          </TouchableOpacity>

          {/* Continue Button */}
          <TouchableOpacity
            style={[
              styles.continueButton,
              isAnyConnected && styles.continueButtonActive,
            ]}
            disabled={!isAnyConnected}
            onPress={() => {router.replace('/homepage')}}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConnectAccount;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerWrapper: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backButton: {
    padding: 10,
    borderRadius: 30,
  },
  gradientText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  mainHeader: {
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
    color: '#555',
  },
  platformRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  platformName: {
    fontSize: 16,
    fontWeight: '500',
  },
  connectButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  connectedButton: {
    backgroundColor: '#843163',
  },
  connectText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  connectedText: {
    color: '#fff',
  },
  skipText: {
    fontSize: 16,
    color: '#843163',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#843163',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    opacity: 0.5,
  },
  continueButtonActive: {
    opacity: 1,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

