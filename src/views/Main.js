import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../views/styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import MessageCard from './components/MessageCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const [item, setItem] = useState([]);
  const navigation = useNavigation();

  const loadFriend = async () => {
    const userJSONText = await AsyncStorage.getItem('user_id');
    // const formData = new FormData();
    // formData.append('user_id', userJSONText);
    // formData.append('text', "");

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(request.responseText);
        setItem(JSON.parse(request.responseText));
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/loadfriend.php?u=' + userJSONText,
      true,
    );
    request.send();
  };

  // useEffect(() => {
    loadFriend();
  // }, []);

  const GoFindPeople = () => {
    navigation.navigate('request');
  };
  const goSearchPage = () => {
    navigation.navigate('contacts');
  };
  const goToMyProfile = () => {
    navigation.navigate('myProfile');
  };

  return (
    <SafeAreaView style={style.mainSafe}>
      {/* navbar */}
      <View style={style.container}>
        <View>
          <Text style={style.mainText}>ChatFox</Text>
        </View>
        <View style={style.iconAlign}>
          <TouchableOpacity onPress={goSearchPage}>
            <Icon
              name="search"
              style={style.mainIconImg}
              size={30}
              color="#2c3e50"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToMyProfile}>
            <Icon
              name="user-circle-o"
              style={style.mainIconImg}
              size={30}
              color="#2c3e50"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* navbar */}

      {/* Massage Card */}
      {/* <ScrollView> */}
      <FlatList data={item} renderItem={itemUI} />
      {/* </ScrollView> */}
      {/* Massage Card */}

      <Pressable style={style.peopleBtn} onPress={GoFindPeople}>
        <Icon name="group" size={30} color="#2c3e50" />
      </Pressable>
    </SafeAreaView>
  );
}

const itemUI = item => {
  return (
    <MessageCard
      count={item.item.count}
      time={item.item.time}
      message={item.item.message}
      name={item.item.name}
      id={item.item.id}
    />
  );
};
