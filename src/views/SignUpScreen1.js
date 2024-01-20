import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import { colors,dimensions,fontSizes } from '../styles/constants';

const SignUpScreen1 = ({navigation}) => {

    const customStyles = {
        backgroundColor: '#FE3F3F',
        width: dimensions.widthLevel13,
        borderRadius: 12,
        textHeight: fontSizes.fontLarge,
        marginTop:'10%',
        
        
       
      };
      const handleNextPress = () => {
        navigation.navigate('SignUpScreen2');
      };
      const handleSignIn = () => {
        navigation.navigate('SignIn');
        
      };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

 

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
        <View style={styles.headingContainer} >
        <Text style={styles.heading}>Sign Up</Text>
        </View>
     
        <View style={styles.mainContainer} >
      <View style={styles.inputContainer}>
        <Text style={styles.text1}>First Name</Text>
        <TextInput
          style={styles.input}
         // placeholder="Enter your email"
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text1}>Last Name</Text>
        <TextInput
          style={styles.input}
         // placeholder="Enter your password"
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text1} >E-mail</Text>
        <TextInput
          style={styles.input}
         // placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          {rememberMe ? (
            <Text>✓</Text>
          ) : (
            <Text>◻️</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.rememberText}>Two factor Authetication</Text>
        
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text1}>Phone</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
         // placeholder="Enter your email"
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
          <ButtonComponent
            text="Next"
            onPress={handleNextPress}
            customStyles={customStyles}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '9%',justifyContent:'center' }}>
        <Text style={{color:colors.black,fontSize:fontSizes.fontMidMedium}}>Already Have an Account ? </Text>
        <TouchableOpacity onPress={handleSignIn}> 
        <Text style={{color:colors.primary,fontSize:fontSizes.fontMidMedium,fontWeight:'bold'}}>Sign In</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
       },
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color of the screen
  },
  headingContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'15%',
    marginBottom:'5%'
  },
  mainContainer:{
    width:'100%',
    paddingHorizontal: dimensions.paddingLevel5,
  },
  heading: {
    fontSize: fontSizes.fontXXXLarge,
    marginBottom: '3%',
    fontWeight:'bold',
    color: colors.primary,
  },
  inputContainer: {
    marginBottom: '5%',
    marginTop:'6%'
  },
  input: {
    width: '100%',
    borderBottomWidth: 1, // Remove the border here
    fontSize: fontSizes.fontMidMedium,
    borderBottomColor: 'gray',
  },
  text1:{
    fontSize: fontSizes.fontMediumPlus,
    color:colors.black
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },
  checkbox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%',
  },
  rememberText: {
    fontSize: fontSizes.fontMidMedium,
    marginRight: 'auto',
    color: 'gray',
   
   
  },
  
});

export default SignUpScreen1;
