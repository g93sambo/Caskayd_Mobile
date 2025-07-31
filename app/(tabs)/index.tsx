//This is the splash page
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import {View,Text,StyleSheet,Dimensions,Animated,} from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const router = useRouter();
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(100)).current;
  const dotColors = ['#FF5A5F', '#00A699', '#FC642D', '#484848', '#007A87', '#FDCB58', '#7F00FF'];

  // Calculate center of screen for "Caskayd"
  const centerX = width / 2;
  const centerY = height / 2;

  // Create circular dot positions
  const dots = dotColors.map((color, index) => {
  const angle = (index / dotColors.length) * 2 * Math.PI;
  const radius = 100 + Math.random() * 10;

  const x = centerX + radius * Math.cos(angle) - 7; // -7 to center dot
  const y = centerY + radius * Math.sin(angle) - 7;

    return {
      color,
      left: x,
      top: y,
      opacity: new Animated.Value(0),
      translateY: new Animated.Value(30),
  };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const animations = [
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
        ...dots.map(dot =>
          Animated.parallel([
            Animated.timing(dot.opacity, {
              toValue: 1,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(dot.translateY, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true,
            }),
          ])
        ),
      ];

      Animated.parallel(animations).start();

      setTimeout(() => {
        router.replace("/SelectionPage/selection");
      }, 2800);
    }, 300);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      {/* Animated Gradient Text */}
      <Animated.View style={{
  opacity: textOpacity,
  transform: [{ translateY: textTranslateY }],
}}>
  <MaskedView
    style={{ height: 60 }}
    maskElement={
      <View style={styles.center}>
        <Text style={[styles.gradientText, { color: 'black' }]}>Caskayd</Text>
      </View>
}>
   <LinearGradient
  colors={['#3232A1','#354747','#5E3345','#722742','#7A254B','#843163','#684441']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={{ height: 60, justifyContent: 'center' }}>
  <View style={{ width: 300, height: 60 }} />
</LinearGradient>
  </MaskedView>
</Animated.View>


      {/* Circular Animated Dots */}
      {dots.map((dot, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: dot.color,
              left: dot.left,
              top: dot.top,
              opacity: dot.opacity,
              transform: [{ translateY: dot.translateY }],
            },
          ]}
        />
      ))}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', 
  },
  center: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
},
gradient: {
  height: 60,
  width: 300,
  justifyContent: 'center',
  alignItems: 'center',
},
  dot: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    opacity: 0.7,
    zIndex: 1,
  },
});
