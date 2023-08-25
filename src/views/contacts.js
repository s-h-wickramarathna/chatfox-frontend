import {
  Text,
  View,
  TextInput,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './styles/style';
import MessageCard from './components/MessageCard';
import OthersCard from './components/OthersCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function contact() {
  const [item, setItem] = useState([]);
  const [item2, setItem2] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
 
  const loadFriends = async text => {
    const userJSONText = await AsyncStorage.getItem('user_id');

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(request.responseText);
        setItem(JSON.parse(request.responseText));
        loadOthers(userJSONText);
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/loadfriend.php?u=' +
        userJSONText +
        '&t=' +
        text,
      true,
    );
    request.send();
  };

  const loadOthers = async userId => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(userId);
        // console.log(request.responseText);
        setItem2(JSON.parse(request.responseText));
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/loadOthers.php?u=' + userId,
      true,
    );
    request.send();
  };

  useEffect(() => {
    loadFriends('');
  }, []);

  useEffect(() => {
    loadOthers();
  }, []);

  // loadOthers();
  // loadFriend('');

  return (
    <SafeAreaView style={style.mainSafe}>
      <View>
        <View style={style.contactView1}>
          <TextInput
            style={style.contactInput1}
            placeholder="Find Peoples ...."
            onChangeText={loadFriends}
          />
        </View>

        <ScrollView
          style={style.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={style.contactView2}>
            <Text style={style.contactText1}>Friends</Text>
          </View>

          {item.map(data => (
            <MessageCard
              count={data.count}
              time={data.time}
              message={data.message}
              name={data.name}
              id={data.id}
            />
          ))}

          <View style={style.contactView2}>
            <Text style={style.contactText1}>Others</Text>
          </View>
          {item2.map(data => (
            <OthersCard name={data.name} id={data.id} type={data.type} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
