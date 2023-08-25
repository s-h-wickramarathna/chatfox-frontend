import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './styles/style';
import {ScrollView} from 'react-native-gesture-handler';
import RequestCard from './components/RequestCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function request() {
  const [friend, setFriend] = useState([]);

  const viewRequest = async () => {
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(JSON.parse(request.responseText));
        setFriend(JSON.parse(request.responseText));
        // console.log(friend);
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/viewRequest.php?u=' + userJSONText,
      true,
    );
    request.send();
  };

  // useEffect(() => {
    viewRequest();
  // }, []);

  return (
    <SafeAreaView style={style.mainSafe}>
      <View>
        <View style={{width: '100%'}}>
          <Text style={style.requestText1}>Friend Requests ....</Text>
        </View>
        <ScrollView>
        {friend.map(data => (
            <RequestCard name={data.name} image={data.image} requestId={data.rid}/>
          ))}
        </ScrollView>
       
      </View>
    </SafeAreaView>
  );
}

