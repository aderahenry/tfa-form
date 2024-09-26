import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type P = {
  validated: boolean;
};

const SubmitAlert = ({ validated }: P) => {
  if (!validated) {
    return null;
  }

  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertText}>Submitted!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  alertText: {
    color: '#155724',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SubmitAlert;
