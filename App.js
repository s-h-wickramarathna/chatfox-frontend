import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/views/Main'
import MessageCard from './src/views/components/MessageCard'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    )
}

