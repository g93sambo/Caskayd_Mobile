import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';

const SignUpScreenCreator2 = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [userName, setUserName] = useState('');
  const [userBio, setUserBio] = useState('');

  const isValid = userName.trim().length > 0 && userBio.trim().length > 0;

  const handleNext = async () => {
    if (!isValid) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push('/SignUpCreator3');
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={styles.headerWrapper}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <AntDesign name="arrowleft" size={24} color="#843163" />
              </TouchableOpacity>
            </View>

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

            <Text style={styles.progressLabel}>Creator Profile</Text>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={['#3232A1', '#354747', '#5E3345', '#722742', '#7A254B', '#843163', '#684441']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.progressFill, { width: '66%' }]}
              />
              <Text style={styles.progressText}>66%</Text>
            </View>

            <View style={styles.inputFieldsContainer}>
              <Text style={styles.label}>Choose a username</Text>
              <TextInput
                style={styles.input}
                placeholder="Choose a username"
                value={userName}
                onChangeText={setUserName}
              />
              <Text style={styles.label}>Tell us a bit about yourself</Text>
              <TextInput
                style={styles.input}
                multiline
                placeholder="Tell us a bit about your business"
                value={userBio}
                onChangeText={setUserBio}
              />
              {errorMsg ? (
                <Text style={{ color: 'red', marginBottom: 10 }}>{errorMsg}</Text>
              ) : null}
            </View>

            <TouchableOpacity
              style={[styles.nextButton, (!isValid || loading) && { opacity: 0.6 }]}
              onPress={handleNext}
              disabled={!isValid || loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.nextButtonText}>Next</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreenCreator2;

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
  progressLabel: {
    fontSize: 24,
    marginTop: 15,
  },
  progressBar: {
    width: '90%',
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 30,
    marginTop: 10,
  },
  progressFill: {
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  progressText: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  inputFieldsContainer: {
    gap: 5,
    width: '100%',
    maxWidth: 400,
  },
  input: {
    borderWidth: 1,
    borderColor: '#843163',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  nextButton: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: '#843163',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
