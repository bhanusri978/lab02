import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TransactionItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <View style={styles.row}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={[styles.amount, item.type === 'Credit' ? styles.credit : styles.debit]}>
          ${item.amount}
        </Text>
      </View>
      <Text style={styles.date}>{item.date} | {item.category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  credit: {
    color: 'green',
  },
  debit: {
    color: 'red',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
});

export default TransactionItem;

