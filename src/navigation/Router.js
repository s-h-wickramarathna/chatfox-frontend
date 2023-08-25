import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import chat from '../views/chat';
import contact from '../views/contacts';
import request from '../views/request';
import myProfile from '../views/myProfile';
import signUp from '../views/signUp';
import signIn from '../views/signIn';

export default function Router() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName='signIn'>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Main} />
        <Stack.Screen name="chat" options={{headerShown:false}} component={chat} />
        <Stack.Screen name="contacts" options={{headerShown:false}} component={contact} />
        <Stack.Screen name="request" options={{headerShown:false}} component={request} />
        <Stack.Screen name="signUp" options={{headerShown:false}} component={signUp} />
        <Stack.Screen name="signIn" options={{headerShown:false}} component={signIn} />
        <Stack.Screen name="myProfile" component={myProfile} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})