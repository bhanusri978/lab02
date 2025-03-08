import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  // Import NavigationContainer
import { AuthProvider } from './context/AuthContext';
import { TransactionProvider } from './context/TransactionContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>  {/* Add NavigationContainer here */}
      <AuthProvider>
        <TransactionProvider>
          <AppNavigator />
        </TransactionProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}