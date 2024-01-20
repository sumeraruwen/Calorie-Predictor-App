// src/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

import {
    colors, dimensions,fontSizes
   
  } from '../styles/constants';

const WelcomeScreen = ({ navigation }) => {

    const customStyles = {
        backgroundColor: '#FE3F3F',
        width: dimensions.widthLevel12,
        borderRadius: 20,
       // height:dimensions.heightLevel3,
       textHeight: fontSizes.fontMediumPlus,
        marginTop:'13%',
        
      };

      const handleGetPress = () => {
        navigation.navigate('SignIn');
        
      };

  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Welcome to FitAdapt Pro</Text>
      <Text style={styles.text2}>you can make new friends and create events with us, join with quick team today ..!</Text>
      
      <ButtonComponent
        text="Get Started"
        onPress={handleGetPress}
        customStyles={customStyles}
      />

       {/* Image at the bottom right corner */}
       {/* <Image
        source={require('../assets/WelcomeEllipse.webp')}
        style={styles.bottomRightImage}
      /> */}

       {/* Image at the bottom center */}
       {/* <Image
        source={require('../assets/girl2.webp')}
        style={styles.bottomCenterImage}
      /> */}
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:colors.white
  },
  text: {
    fontSize: fontSizes.fontXXXLarge,
    fontWeight: 'bold',
    marginTop: '20%',
    color:colors.black
  },
  text2: {
    fontSize: fontSizes.fontMidMedium,
    marginTop: '13%',
    color:colors.black,
    width:dimensions.widthLevel3,
    textAlign: 'center',
  },
  bottomRightImage: {
    position: 'absolute', // Position the image absolutely
    bottom: 0, // Place it at the bottom
    right: 0, // Place it at the right
  },
  bottomCenterImage: {
    position: 'absolute',
    bottom: 0,
    width:360,
    height:360,
    left:-10
  },
  
 
});

export default WelcomeScreen;
