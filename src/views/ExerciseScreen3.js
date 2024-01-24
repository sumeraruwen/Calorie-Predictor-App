import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ExerciseComponent from '../components/ExerciseComponent';

const ExerciseScreen3 = () => {
  const navigation = useNavigation();

  const handlePredict = () => {
    // Navigate to the next screen
    navigation.navigate('PredictScreen');
  };

  return (
    <ExerciseComponent
      videoSource={require('../assets/ex7.mp4')}
      exerciseName="RUSSIAN TWIST"
      exerciseCount="x 16"
      buttonText="DONE"
      onPress={handlePredict}
    />
  );
};

export default ExerciseScreen3;
