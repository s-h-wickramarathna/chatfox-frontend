import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {style} from '../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RequestCard(props) {

  const AcceptRequest = () =>{
    Alert.alert("rid",props.requestId);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(request.responseText);
        // setFriend(JSON.parse(request.responseText));
        // console.log(friend);
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/acceptRequest.php?r=' + props.requestId,
      true,
    );
    request.send();
  }
  const DeleteRequest = () =>{
    Alert.alert("rid",props.requestId);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(request.responseText);
        // setFriend(JSON.parse(request.responseText));
        // console.log(friend);
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/rejectRequest.php?r=' + props.requestId,
      true,
    );
    request.send();
  }

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
            <Text>Say : Hello ....</Text>
          </View>
        </View>
      </View>
      <View style={style.requestToucheble1}>
        <TouchableOpacity onPress={AcceptRequest}>
        <Icon
            name="check-square-o"
            style={style.mainIconImg}
            size={30}
            color="#00b894"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={DeleteRequest}>
        <Icon
            name="trash-o"
            style={style.mainIconImg}
            size={30}
            color="#d63031"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
