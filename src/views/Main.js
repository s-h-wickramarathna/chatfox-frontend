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
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../views/styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import MessageCard from './components/MessageCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import baseUrl from '../baseurl';

export default function Main() {
  const [item, setItem] = useState([]); 
  const navigation = useNavigation();

  const loadFriend = async () => {
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        console.log(request.responseText);
        if (
          JSON.parse(request.responseText) == 'No Friends You Have Yet .....'
        ) {
          setItem('No Friends You Have Yet .....');
        } else {
          setItem(JSON.parse(request.responseText));
        } 
      }
    };

    request.open(
      'GET', 
      baseUrl+'chatfox/loadfriend.php?u=' + userJSONText,
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
  // console.log(item)
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

      {item == 'No Friends You Have Yet .....' ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Text style={{fontSize: 18, color: 'black', marginBottom: 10}}>
            {item}
          </Text> 
          <Button title="Add Friends" onPress={goSearchPage} />
        </View>
      ) : (
        <FlatList data={item} renderItem={itemUI} />
      )}

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
      image={item.item.image}
    />
  );
};
 