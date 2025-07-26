// SignInScreen.tsx
import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Platform,KeyboardAvoidingView,ScrollView,ActivityIndicator,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { RFValue } from 'react-native-responsive-fontsize';

const SignInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { type} = useLocalSearchParams<{ type?: string;}>();

  const handleSignIn = async () => {
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Mock API delay
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const userData = {
        role: type || 'unknown',
        email,
        password,
      };
      //console.log('User Data:', userData);
      router.replace('/aftersplash'); 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorMsg('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };
  const handleForgotPassword = () => {
    alert('Password reset link has been sent to your email.');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
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
            }>
            <LinearGradient
              colors={['#3232A1','#354747','#5E3345','#722742','#7A254B','#843163','#684441',]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Text style={[styles.gradientText, { opacity: 0 }]}>Caskayd</Text>
            </LinearGradient>
          </MaskedView>

          <Text style={styles.header}>Login</Text>

          <View style={styles.inputFieldsContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address"autoCapitalize="none"autoCorrect={false}/>

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={[styles.input, { flex: 1, marginBottom: 0 }]} secureTextEntry={!showPassword} autoCapitalize="none" autoCorrect={false}/>
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="#843163" style={styles.eyeIcon}/>
              </TouchableOpacity>
            </View>
          </View>

          {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.signInButton, loading && { opacity: 0.6 }]}onPress={handleSignIn} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.signInButtonText}>Log In</Text>
            )}
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity
            onPress={() => alert('Google Sign In coming soon!')}
            style={styles.googleButton}>
            <AntDesign name="google" size={20} color="#000" />
            <Text style={styles.googleButtonText}>Sign In with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  header: {
    fontSize: RFValue(26),
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30,
  },
  gradientText: {
    fontSize: RFValue(48),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  inputFieldsContainer: {
    gap: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: RFValue(16),
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#843163',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: RFValue(16),
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  eyeIcon: {
    marginLeft: 10,
    padding: 5,
  },
  errorText: {
    color: 'red',
    fontSize: RFValue(14),
    marginBottom: 10,
    textAlign: 'center',
  },
  forgotPasswordLink: {
    color: '#843163',
    fontWeight: '500',
    fontStyle: 'italic',
    marginTop: 5,
    marginBottom: 10,
  },
  signInButton: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: '#843163',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  divider: {
    flex: 1,
    height: 3,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#999',
    fontSize: RFValue(20),
  },
  googleButton: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 12,
    justifyContent: 'center',
    gap: 10,
  },
  googleButtonText: {
    fontSize: RFValue(16),
    color: '#000',
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
});
