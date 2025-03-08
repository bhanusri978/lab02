import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text>Description: {item.description}</Text>
      <Text>Amount: ${item.amount}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Location: {item.location}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Category: {item.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});

export default TransactionDetailScreen;


