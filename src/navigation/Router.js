import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import chat from '../views/Chat';
import contact from '../views/Contacts';
import request from '../views/Request';
import MyProfile from '../views/MyProfile';
import signUp from '../views/SignUp';
import signIn from '../views/SignIn';

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
        <Stack.Screen name="myProfile" component={MyProfile} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})