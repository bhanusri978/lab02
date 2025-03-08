
import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const DashboardScreen = ({ navigation }) => {
  const { transactions } = useContext(TransactionContext);
  const { logout } = useContext(AuthContext); // Get logout function

  return (
    <View style={styles.container}>
      {/* Toolbar with Logout Button */}
      <View style={styles.toolbar}>
        <Text style={styles.title}>Dashboard</Text>
        <Button title="Logout" color="red" onPress={() => {
          logout(); // Call logout function
          navigation.replace('Login'); // Navigate to Login screen
        }} />
      </View>

      {/* Transactions List */}
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { item })}>
            <Text>{item.description} - ${item.amount}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Add Transaction Button */}
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  toolbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold' }
});

export default DashboardScreen;
