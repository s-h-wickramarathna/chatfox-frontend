import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {style} from '../styles/style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OthersCard(props) {

  const sendRequest = async () => {
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(request.responseText);
        // if (request.responseText == 1) {
        //   setText('Pending');
        // }
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/sendRequest.php?u=' +
        JSON.parse(userJSONText) +
        '&f=' +
        props.id,
      true,
    );
    request.send();
  };

  return (
    <View style={style.messageCardContainer}>
      <View style={style.MessageCardView1}>
        <View style={style.MessageCardView2}>
          <Image
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={style.MessageCardImage}
          />
        </View>

        <View style={style.MessageCardView3}>
          <View>
            <Text style={style.MessageCardText}>{props.name}</Text>
            <Text>Say Hi</Text>
          </View>
        </View>
      </View>
      <View style={style.MassageCountBadgeView1}>
        <TouchableOpacity
          style={
            props.type == 'Pending'
              ? style.otherCardtocheble2
              : style.otherCardtocheble1
          }
          onPress={sendRequest}>
          <Text style={style.otherCardText1}>
            {props.type == 'Pending' ? 'Pen ..' : 'ADD'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
