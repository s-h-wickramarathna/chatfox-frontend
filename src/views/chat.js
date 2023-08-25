import {Text, View, ScrollView, Alert, TouchableOpacity, RefreshControl,} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {style} from './styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';
import ChatUserDetails from './components/ChatUserDetails';
import RecivedMassage from './components/RecivedMassage';
import SentMessage from './components/SentMessage';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function chat(props) {
  const [friend_id,setFriendId] = useState(props.route.params.id);
  const [friend_name,setFriendName] = useState(props.route.params.name);
  const [mitem,setMItem] = useState([]);
  const [text,setText] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef = useRef();

  state = {
    inputTextValue : '',
 }
 const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);
  
  const loadChat = async() => {
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(request.responseText);
        setMItem(JSON.parse(request.responseText));
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/loadChat.php?u=' + userJSONText + '&f=' + friend_id,
      true,
    );
    request.send();
  }

  const sendMessage = async() =>{
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(request.responseText);
        if(request.responseText == 1){
          this.setText({inputTextValue : ''})
        }
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/sendChat.php?u=' + userJSONText + '&f=' + friend_id + '&t=' + text,
      true,
    );
    request.send();
  }

    loadChat();


  return (
    <>
    <SafeAreaView style={style.mainSafe}>
    <View style={style.messageCardContainer}>
        <ChatUserDetails name={friend_name}/>
        <View style={style.chatView1}>
          <Icon name="phone" size={30} color="#000" style={style.chatIcon1} />
          <Icon name="info-circle" size={30} color="#000" style={style.chatIcon2}/>
        </View>
      </View>

      <ScrollView ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>

        <View style={style.chatView2}>
          <View style={style.chatView3}>
            <Text style={style.chatView4}>
              Don,t worry massages are end to end encryypted. No one outside of
              this chat
            </Text>
          </View>
        </View>
        {mitem.map(data => (
          data.side == "Left" ? <RecivedMassage msg={data.message} time={data.time}/> :<SentMessage msg={data.message} time={data.time}/>
            

          
        ))}
      </ScrollView>

      <View style={style.chatView5}>
        <TextInput style={style.chatInput1} placeholder="Type Message ...." onChangeText={setText} value={this.state.inputTextValue}/>
        <TouchableOpacity onPress={sendMessage}>
        <Icon name="send" size={30} color="#000" style={style.chatIcon3} />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
    </>
  );
}
