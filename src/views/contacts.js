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
import baseUrl from '../baseurl';
import RequestCard from './components/RequestCard';

export default function contact() {
  const [item, setItem] = useState([]);
  const [item2, setItem2] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshOthers, setRefreshOthers] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      loadFriends('');
      loadOthers();
    }, 2000);
  }, []);

  const reload = React.useCallback(() => {
    loadFriends('');
    loadOthers();
  }, []);

  const loadFriends = async text => {
    const userJSONText = await AsyncStorage.getItem('user_id');

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        if (
          JSON.parse(request.responseText) == 'No Friends You Have Yet .....'
        ) {
          setItem('No Friends You Have Yet .....');
        } else {
          setItem(JSON.parse(request.responseText));
        }
      }
    };
console.log(userJSONText);  
    request.open(
      'GET',
      baseUrl + 'chatfox/loadfriend.php?u=' + userJSONText + '&t=' + text,
      true, 
    );
    request.send();
  };

  const loadOthers = async () => {
    const userId = JSON.parse(await AsyncStorage.getItem('user_id'));
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        console.log(request.responseText);
        if (
          JSON.parse(request.responseText) == 'No Friends You Have Yet .....'
        ) {
          setItem2('No Friends You Have Yet .....');
        } else {
          setItem2(JSON.parse(request.responseText));
        }
 
        console.log(item2);
      }
    };
// console.log(userId);  
    request.open('GET', baseUrl + 'chatfox/loadOthers.php?u=' + userId, true);
    request.send();
  };

  useEffect(() => {
    loadFriends('');
  }, []);

  useEffect(() => {
    loadOthers();
  }, []);

  const sendRequest = async id => {
    console.log(id);
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        if (request.responseText == 1) {
          reload(); 
        }
      }
    };

    request.open(
      'GET',
      baseUrl +
        'chatfox/sendRequest.php?u=' +
        JSON.parse(userJSONText) +
        '&f=' +
        id,
      true,
    );
    request.send();
  };

  // const send = () => {
  //   sendRequest();
  //   // goSearchPage();
  // };

  return (
    <SafeAreaView style={style.mainSafe}>
      <View>
        <View style={style.contactView1}>
          <TextInput
            style={style.contactInput1}
            placeholder="Find Peoples ...."
            placeholderTextColor="gray"
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

          {item != 'No Friends You Have Yet .....'
            ? item.map(data => (
                <MessageCard
                  count={data.count}
                  time={data.time}
                  message={data.message}
                  name={data.name}
                  id={data.id}
                  image={data.image}
                />
              ))
            : null}

          <View style={style.contactView2}>
            <Text style={style.contactText1}>Others</Text>
          </View>
          {item2.map(odata => (
            odata.type == "Approveble" ?
            <RequestCard/> :
            <OthersCard
              name={odata.name}
              id={odata.id}
              type={odata.type}
              image={odata.image}
              sendRequest={sendRequest}
            />
          ))}
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
