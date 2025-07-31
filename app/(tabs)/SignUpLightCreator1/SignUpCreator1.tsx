//This is the sign up page for creators 1
import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Platform,KeyboardAvoidingView,ScrollView,ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useLocalSearchParams,useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';

const SignUpScreenCreator1 = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const {type} = useLocalSearchParams<{ type?: string; name?: string }>();

    const handleSignUp = () => {
  setErrorMsg('');

  if (!email || !password) {
    setErrorMsg('Please enter both email and password.');
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    setErrorMsg('Please enter a valid email address.');
    return;
  }
  if (password.length < 6) {
  setErrorMsg('Password must be at least 6 characters.');
  return;
  }

  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    const userData = {
      role: type || 'unknown',
      email,
      password,
    };
    console.log('User Data:', userData);
    router.push('/SignUpLightCreator2/SignUpCreator2');
  }, 1500);
};

return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                    <View style={styles.headerWrapper}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <AntDesign name="arrowleft" size={24} color="#843163" />
              </TouchableOpacity>
                    </View>
                        <MaskedView maskElement={
                                      <Text style={[styles.gradientText, { backgroundColor: 'transparent' }]}>
                                        Caskayd
                                      </Text>}>
                                    <LinearGradient
                                      colors={['#3232A1','#354747','#5E3345','#722742','#7A254B','#843163','#684441',]}
                                      start={{ x: 0, y: 0 }}
                                      end={{ x: 1, y: 1 }}>
                                      <Text style={[styles.gradientText, { opacity: 0 }]}>Caskayd</Text>
                                    </LinearGradient>
                                  </MaskedView>

                                  <Text style = {styles.progressLabel}>Account Information</Text>
                                  <View style={styles.progressBar}>
                                    <LinearGradient
                                    colors={['#3232A1','#354747','#5E3345','#722742','#7A254B','#843163','#684441']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.progressFill, { width: '33%' }]}/>
                                    <Text style={styles.progressText}>33%</Text>
                                </View>
                                <Text style={styles.header}>Creator Sign Up</Text>
                                <TouchableOpacity onPress={() => alert('Google Sign Up coming soon!')} style={styles.googleButton}>
                                            <AntDesign name="google" size={20} color="#000" />
                                            <Text style={styles.googleButtonText}>Sign Up with Google</Text>
                                          </TouchableOpacity>
                                
                                          <View style={styles.dividerContainer}>
                                            <View style={styles.divider} />
                                            <Text style={styles.orText}>or</Text>
                                            <View style={styles.divider} />
                                          </View>
                <View style={styles.inputFieldsContainer}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput autoCapitalize="none" autoCorrect={false} placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address"/>
                
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.passwordWrapper}>
                              <TextInput autoCapitalize="none" autoCorrect={false}placeholder="Password"value={password} onChangeText={setPassword} style={[styles.input, { flex: 1, marginBottom: 0 }]}secureTextEntry={!showPassword}/>
                              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="#843163" style={styles.eyeIcon}/>
                              </TouchableOpacity>
                            </View>
                          </View>
                
                          {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
                
                          <Text style={styles.loginText}>
                            Already have an account?{' '}
                            <Text style={styles.loginLink} onPress={() => router.push( {pathname:'/LogInLight/login', params: {type}})}>
                              login
                            </Text>
                          </Text>
                
                          <TouchableOpacity
                            style={[styles.signUpButton, loading && { opacity: 0.6 }]}
                            onPress={handleSignUp}
                            disabled={loading}>
                            {loading ? (
                              <ActivityIndicator size="small" color="#fff" />
                            ) : (
                              <Text style={styles.signUpButtonText}>Next</Text>
                            )}
                          </TouchableOpacity>
                                          
                                
            </View>
          </ScrollView>
    </KeyboardAvoidingView>
)

}

export default SignUpScreenCreator1

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    headerWrapper:{
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
    },
    backButton:{
        padding: 10,
        borderRadius: 30,
    },
    gradientText: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    progressLabel:{
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
    marginTop:  10,
  },
  progressFill: {
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  progressText: {
    alignSelf: 'center',
    color: '#333',
    fontWeight: 'bold',
    zIndex: 1,
  },
  header:{
    fontSize: 35,
    fontWeight: 'bold',
  },
  googleButton: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#000',
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
    fontSize: 20,
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
  loginText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    color: '#333',
  },
  loginLink: {
    color: '#843163',
    fontWeight: '500',
  },
  signUpButton: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: '#843163',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  inputFieldsContainer: {
    gap: 5,
    width: '100%',
    maxWidth: 400,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  eyeIcon: {
    marginLeft: 10,
    padding: 5,
  },
})