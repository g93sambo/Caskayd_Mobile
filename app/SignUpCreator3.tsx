import {View,Text,TouchableOpacity,StyleSheet,Platform,KeyboardAvoidingView,ScrollView,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';

const SignUpScreenCreator3 = () => {
    const router = useRouter();
    const platforms = [
  {
    name: 'Facebook',
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    price: '₦5,000',
  },
  {
    name: 'X',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968830.png',
    price: '₦4,000',
  },
  {
    name: 'Instagram',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    price: '₦6,500',
  },
  {
    name: 'TikTok',
    icon: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png',
    price: '₦3,200',
  },
  {
    name: 'YouTube',
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
    price: '₦8,000',
  },
  {
    name: 'Snapchat',
    icon: 'https://cdn-icons-png.flaticon.com/512/3670/3670151.png',
    price: '₦2,900',
  },
];
    
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
        
                                <Text style = {styles.progressLabel}>Rates and Finish</Text>
                                <View style={styles.progressBar}>
                                    <LinearGradient
                                    colors={['#3232A1','#354747','#5E3345','#722742','#7A254B','#843163','#684441']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.progressFill, { width: '100%' }]}/>
                                    <Text style={styles.progressText}>100%</Text>
                                </View>
                                <Text style={styles.sectionHeader}>Charge per platform</Text>

      {/* Table */}
      <View style={styles.table}>
        {platforms.map((platform, index) => (
          <View key={index} style={styles.row}>
            <Image source={{ uri: platform.icon }} style={styles.icon} />
            <Text style={styles.platformName}>{platform.name}</Text>
            <Text style={styles.price}>{platform.price}</Text>
          </View>
        ))}
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => {router.push('/ConnectAccount')}}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
                            </View>
                          </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreenCreator3

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
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
  },
   sectionHeader: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
  },
  table: {
    marginTop: 12,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  icon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    marginRight: 12,
  },
  platformName: {
    flex: 1,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  signUpButton: {
    marginTop: 32,
    backgroundColor: '#8C52FF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 24,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})