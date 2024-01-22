// DietPlanScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DietPlanScreen = ({ route }) => {
  // Get the predicted calories from the route parameters
  const { predictedCalories } = route.params;

  // Determine the diet plan based on the calorie range
  const getDietPlan = () => {
    if (predictedCalories >= 20 && predictedCalories <= 100) {
      return 'Diet Plan A: Low Calorie Diet';
    } else if (predictedCalories >= 110 && predictedCalories <= 200) {
      return 'Diet Plan B: Moderate Calorie Diet';
    } else {
      return 'No specific diet plan available for this calorie range.';
    }
  };

  return (
    <View style={styles.container}>
      <Text>Diet Plan</Text>
      <Text>Predicted Calories: {predictedCalories}</Text>
      <Text>{getDietPlan()}</Text>
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

export default DietPlanScreen;
