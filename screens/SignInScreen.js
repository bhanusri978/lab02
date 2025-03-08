import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const SignInScreen = ({ navigation }) => {
  const { signIn, user } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    if (username.trim().toLowerCase() === 'admin' && password.trim().toLowerCase() === 'admin') {
      signIn(username, password);  // Update context
      setError(''); // Clear error on successful login
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  // If user is logged in, navigate to Dashboard
  if (user) {
    navigation.replace('Dashboard');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Expense Tracker App</Text>
      <Text style={styles.title}>Sign In</Text>
      <TextInput 
        placeholder="Username" 
        value={username} 
        onChangeText={setUsername} 
        style={styles.input} 
        autoCapitalize="none" // Ensure input is lowercase
      />
      <TextInput 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        style={styles.input} 
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  appTitle: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, marginBottom: 10 },
  error: { color: 'red', marginBottom: 10 },
});

export default SignInScreen;
