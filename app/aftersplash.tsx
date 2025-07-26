//This is an aftersplash page that comes after the bussines sign up
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign} from '@expo/vector-icons';

const categories = [
  "Product/Retail", "Beauty", "Technology", "Fashion",
  "Finance/Business", "Betting", "Events/Entertainment", "Services"
];

export default function Aftersplash() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [bio, setBio] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else if (selectedCategories.length < 5) {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleDone = async () => {
    if (selectedCategories.length < 2 || !bio.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.replace('/'); // replace with your dashboard route
    }, 1500);
  };

  const isValid = selectedCategories.length >= 2 && bio.trim().length > 0;
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
                      colors={[
                        '#3232A1',
                        '#354747',
                        '#5E3345',
                        '#722742',
                        '#7A254B',
                        '#843163',
                        '#684441',
                      ]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}>
                      <Text style={[styles.gradientText, { opacity: 0 }]}>Caskayd</Text>
                    </LinearGradient>
                  </MaskedView>
      <Text style={styles.header}>Select up to 5 categories that describe your business</Text>
      <View style={styles.categoryContainer}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategories.includes(cat) && styles.selectedCategory
            ]}
            onPress={() => toggleCategory(cat)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategories.includes(cat) && styles.selectedText
            ]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    <Text style={styles.header}>Describe your business in a few sentences</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Tell us a bit about your business"
        value={bio}
        onChangeText={setBio}
      />

      <TouchableOpacity
        style={[styles.doneButton, !isValid && styles.disabledButton]}
        onPress={handleDone}
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.doneText}>Done</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    marginTop:20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#888',
    margin: 5,
  },
  selectedCategory: {
    backgroundColor: '#663399',
    borderColor: '#663399',
  },
  categoryText: {
    color: '#444',
  },
  selectedText: {
    color: 'white',
  },
  input: {
    minHeight: 100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: '#663399',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  doneText: {
    color: 'white',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  gradientText: {
    fontSize: RFValue(48),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
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
