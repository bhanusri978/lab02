import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const AddTransactionScreen = ({ navigation }) => {
  const { addTransaction } = useContext(TransactionContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleAddTransaction = () => {
    // Trim inputs to remove unnecessary spaces
    const trimmedDescription = description.trim();
    const trimmedAmount = amount.trim();
    const trimmedDate = date.trim();
    const trimmedLocation = location.trim();
    const trimmedType = type.trim().toLowerCase();
    const trimmedCategory = category.trim();

    // Validating Fields
    if (!trimmedDescription || !trimmedAmount || !trimmedDate || !trimmedLocation || !trimmedType || !trimmedCategory) {
      setError('All fields are required!');
      return;
    }

    // Ensure amount is a valid number
    if (isNaN(trimmedAmount) || parseFloat(trimmedAmount) <= 0) {
      setError('Amount must be a positive number!');
      return;
    }

    // Validate transaction type
    const validTypes = ['credit', 'debit', 'refund'];
    if (!validTypes.includes(trimmedType)) {
      setError('Type must be "Credit", "Debit", or "Refund"!');
      return;
    }

    setError('');

    // Add transaction
    addTransaction({
      description: trimmedDescription,
      amount: parseFloat(trimmedAmount),
      date: trimmedDate,
      location: trimmedLocation,
      type: trimmedType.charAt(0).toUpperCase() + trimmedType.slice(1), // Capitalize first letter
      category: trimmedCategory,
    });

    Alert.alert('Success', 'Transaction added successfully!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Transaction</Text>
      <TextInput placeholder="Description" style={styles.input} onChangeText={setDescription} value={description} />
      <TextInput placeholder="Amount" style={styles.input} keyboardType="numeric" onChangeText={setAmount} value={amount} />
      <TextInput placeholder="Date (YYYY-MM-DD)" style={styles.input} onChangeText={setDate} value={date} />
      <TextInput placeholder="Location" style={styles.input} onChangeText={setLocation} value={location} />
      <TextInput placeholder="Type (Credit/Debit/Refund)" style={styles.input} onChangeText={setType} value={type} />
      <TextInput placeholder="Category (e.g., Shopping, Travel)" style={styles.input} onChangeText={setCategory} value={category} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  input: { borderWidth: 1, marginVertical: 5, padding: 10, borderRadius: 5 },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
});

export default AddTransactionScreen;


