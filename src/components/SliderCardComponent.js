import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { dimensions } from '../styles/constants';

const SliderCardComponent = ({ category, topic, date, participants,buttonName }) => {
  return (
  
    <View style={styles.card}>
      {/* <Image
       source={require('../assets/horizontal1.webp')}
        style={styles.sliderImage}
      /> */}

      {/* Card Details */}
     
      <View style={styles.detailsContainer}>
    
        {/* <Text style={styles.category}>{category}</Text> */}
        <Text style={styles.topic}>{topic}</Text>
        <Text style={styles.date}>{date}</Text>
       
       
      </View>
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  card: {
    height:dimensions.heightLevel10,
    //width:'85%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    margin: 20,
    flexDirection: 'column',
    alignContent:'center',
   
   
  },
  sliderImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,  // Adjust this value to control the top-left corner radius
    borderTopRightRadius: 15, 
    
  },
  detailsContainer: {
    padding: 10,
  },
  category: {
    color: 'gray',
  },
  topic: {
    fontWeight:'500',
    color: '#000',
    marginTop: 2,
  },
  date: {
    color: 'gray',
    marginTop: 5,
  },
  participantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  participants: {
    color: '#000',
    marginTop: 5,
  },
  interestedButton: {
    backgroundColor: '#FE3F3F', // Blue color, you can change it
    borderRadius: 20,
    padding: 5,
    width: 130, // Set the desired width
    height: 38, // Set the desired height
    justifyContent: 'center', // Center the button content vertically
    alignItems: 'center', // Center the button content horizontally
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5, 

    //marginTop: 10,
    
  },
  interestedButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  line: {
    height: 1, // Adjust the height of the line as needed
    width: '100%', // Adjust the width of the line as needed
    backgroundColor: '#ccc',// Adjust the line color as needed
   // marginHorizontal: 20, // Adjust the margin as needed
  marginTop:6,
   marginBottom:4,
  // marginVertical: '10%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this to space out the elements
    marginBottom: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
     
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  iconText: {
    color: 'gray',
    marginRight: 10,
  },
  category: {
    color: 'gray',
  },
});

export default SliderCardComponent;
