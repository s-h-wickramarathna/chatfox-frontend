import {Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import {style} from './styles/style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import baseUrl from '../baseurl';

export default function signIn() {
  const [mobile,setMobile] = useState(null);
  const [password,setPassword] = useState(null);

  const navigation = useNavigation();

  const storeData = async (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('user_id', jsonValue);
    } catch (e) {
      Alert.alert("Message",e);
    }
  }

const signIn = () => {
  const User_details = {mobile: mobile, password: password};
  const details = JSON.stringify(User_details);

  const form = new FormData();
  form.append('signInDetails', details);


  var request = new XMLHttpRequest();

  request.onreadystatechange = function(){
    if(request.readyState == 4 && this.status == 200){
      var response = request.responseText;
      var data = JSON.parse(response);
      if(data == "Invalid Login Details"){
        Alert.alert("Message",data);

      }else{
        storeData(data);
        navigation.navigate('Home');
      }
    

    }
  }
  request.open("POST",baseUrl+"chatfox/signIn.php",true);
  request.send(form);

}


  return (
    <SafeAreaView style={style.mainSafe}>
      <View style={style.signInMainView}>
        <View style={style.signInView1}>
          <Image
            source={require("../assets/chatfox.jpg")}
            style={style.myProfileImage1}
          />
          <Text style={style.signInTopic}>.... ChatFox ....</Text>
        </View>
        <View style={style.inputSet}>
          <View style={style.signUpView1}>
            <TextInput style={style.signUpTextInput1} placeholder="User Mobile" placeholderTextColor="gray" keyboardType='numeric' onChangeText={setMobile}/>
            <Icon name="user" size={25} color="black" style={style.inputIcon} />
          </View>
          <View style={style.signUpView1}>
            <TextInput style={style.signUpTextInput1} placeholder="User Password" secureTextEntry={true} placeholderTextColor="gray" onChangeText={setPassword}/>
            <Icon name="key" size={25} color="black" style={style.inputIcon} />
          </View>
        </View>
        <View style={style.btnview}>
            <TouchableOpacity style={style.signInBtn} onPress={signIn}><Text style={style.signUpText1}>Sign In</Text></TouchableOpacity>
            <TouchableOpacity style={style.signInBtn2}><Text style={style.signInText1}>Forgot Password ?</Text></TouchableOpacity>
            <TouchableOpacity style={style.signInBtn2} onPress={()=>{navigation.navigate('signUp')}}><Text style={style.signInTextc2}>Create New Account</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
