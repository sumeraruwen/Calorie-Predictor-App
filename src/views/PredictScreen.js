import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

//const apiUrl = 'http://127.0.0.1:8000//predict_calories'; 
const apiUrl = 'http://192.168.1.104:8000/predict_calories';

const PredictScreen = ({navigation}) => {
  const [inputs, setInputs] = useState({
    Gender: '',
    Age: '',
    Height: '',
    Weight: '',
    Duration: '',
    Heart_rate: '',
    Body_temp: '',

   
  });

  const [calories, setCalories] = useState(null);

  const handleInputChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const predictCalories = async () => {
   

    try {
      const convertedInputs = {
        ...inputs,
        Age: parseInt(inputs.Age),
        Body_temp: parseInt(inputs.Body_temp),
        Duration: parseInt(inputs.Duration),
        Gender: parseInt(inputs.Gender),
        Heart_rate: parseInt(inputs.Heart_rate),
        Height: parseInt(inputs.Height),
        Weight: parseInt(inputs.Weight),
      };

      console.log('Input Data:', convertedInputs);

      const response = await axios.post(apiUrl, convertedInputs);

      console.log('Response:', response.data);

      const predictedCalories = response.data.prediction;
      setCalories(predictedCalories);
    } catch (error) {
      console.error('Error predicting calories:', error);
    }


  };

  return (
    <View style={styles.container}>
      <Text>Calorie Predictor App</Text>
      <TextInput
        placeholder="Gender"
        value={inputs.Gender}
        onChangeText={(text) => handleInputChange('Gender', text)}
      />
       <TextInput
        placeholder="Age"
        value={inputs.Age}
        onChangeText={(text) => handleInputChange('Age', text)}
      />
       <TextInput
        placeholder="Height"
        value={inputs.Height}
        onChangeText={(text) => handleInputChange('Height', text)}
      />
       <TextInput
        placeholder="Weight"
        value={inputs.Weight}
        onChangeText={(text) => handleInputChange('Weight', text)}
      />
       <TextInput
        placeholder="Duration"
        value={inputs.Duration}
        onChangeText={(text) => handleInputChange('Duration', text)}
      />
        <TextInput
        placeholder="HeartRate"
        value={inputs.Heart_rate}
        onChangeText={(text) => handleInputChange('Heart_rate', text)}
      />
        <TextInput
        placeholder="BodyTemperature"
        value={inputs.Body_temp}
        onChangeText={(text) => handleInputChange('Body_temp', text)}
      />
      {/* Add similar TextInput components for other input fields */}
      <Button title="Predict Calories" onPress={predictCalories} />
      {calories !== null && <Text>Predicted Calories: {calories}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PredictScreen;
