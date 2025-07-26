//This is the selection screen
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Modal,TextInput,KeyboardAvoidingView,ScrollView,Platform,TouchableWithoutFeedback,Keyboard,useWindowDimensions,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const SelectionScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [loading, setLoading] = useState(false);

  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <MaskedView
        maskElement={
          <Text style={[styles.gradientText, { backgroundColor: 'transparent' }]}>
            Caskayd
          </Text>
        }>
        <LinearGradient
          colors={['#3232A1', '#354747', '#5E3345', '#722742', '#7A254B', '#843163', '#684441']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <Text style={[styles.gradientText, { opacity: 0 }]}>Caskayd</Text>
        </LinearGradient>
      </MaskedView>

      <Text style={styles.subtitle}>Tell us who you are</Text>

      <Text style={styles.description}>
        Are you a business ready to amplify your reach, or a creator looking to
        monetize your content? Select the option that best describes you to
        unlock your personalized experience.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>I`m a Business</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const type = 'creator';
            router.push({
              pathname: '/SignUpCreator1',
              params: { type },
            });
          }}
        >
          <Text style={styles.buttonText}>I`m a Creator</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.modalContentWrapper, { width: width * 0.9, maxHeight: height * 0.8 }]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <ScrollView contentContainerStyle={styles.modalContent} keyboardShouldPersistTaps="handled">
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>×</Text>
                </TouchableOpacity>

                <Text style={styles.modalTitle}>Enter Your Business Name</Text>

                <TextInput autoFocus placeholder="Business Name" style={[styles.input, { width: '100%' }]} value={businessName}onChangeText={setBusinessName}/>

                <TouchableOpacity disabled={loading} accessibilityRole="button" style={styles.button}
                  onPress={() => {
                    if (!businessName.trim()) {
                      alert('Please enter your business name.');
                      return;
                    }
                    setLoading(true);
                    const type = 'business';
                    const name = businessName.trim();
                    router.push({
                      pathname: '/SignUpBusiness',
                      params: { type, name },
                    });
                  }}
                >
                  <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
              </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
};

export default SelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  gradientText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    marginTop: 40,
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    color: '#444',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 40,
    width: '100%',
    gap: 16,
  },
  button: {
    marginHorizontal: 10,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#843163',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalContentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  modalContent: {
    padding: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#999',
  },
});
