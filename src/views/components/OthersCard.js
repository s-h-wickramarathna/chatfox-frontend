import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {style} from '../styles/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import baseUrl from '../../baseurl';

export default function OthersCard(props) {
  // const navigation = useNavigation();

  // const goSearchPage = () => {
  //   navigation.navigate('contacts');
  // };
  // const sendRequest = async () => {
  //   const userJSONText = await AsyncStorage.getItem('user_id');
  //   var request = new XMLHttpRequest();
  //   request.onreadystatechange = function () {
  //     if (request.readyState == 4 && request.status == 200) {
  //       console.log(request.responseText);
  //       if (request.responseText == 1) {
  //         console.log(request.responseText);
  //       }
  //     }
  //   };

  //   request.open(
  //     'GET',
  //     baseUrl +
  //       'chatfox/sendRequest.php?u=' +
  //       JSON.parse(userJSONText) +
  //       '&f=' +
  //       props.id,
  //     true,
  //   );
  //   request.send();
  // };
  // const send = () => {
  //   sendRequest();
  //   // goSearchPage();
  // };

  const handleSendRequest = () => {
    // Call the sendRequest function passed from the parent component with the 'id'
    props.sendRequest(props.id);
  };

  return (
    <View style={style.messageCardContainer}>
      <View style={style.MessageCardView1}>
        <View style={style.MessageCardView2}>
          <Image
            source={{uri: baseUrl + props.image}}
            style={style.MessageCardImage}
          />
        </View>

        <View style={style.MessageCardView3}>
          <View>
            <Text style={style.MessageCardText}>{props.name}</Text>
            <Text style={{color: 'gray'}}>Say Hi</Text>
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
          disabled={props.type == 'Pending' ? true : false}
          onPress={handleSendRequest}>
          <Text style={style.otherCardText1}>
            {props.type == 'Pending' ? 'Pen ..' : 'ADD'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
