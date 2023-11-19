import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from '../styles/style';
import MessageCountBadge from './MessageCountBadge';
import { useNavigation } from '@react-navigation/native';
import baseUrl from '../../baseurl';

export default function MessageCard(props) {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('chat',{
      id: props.id,
      name:props.name,
      image:props.image,
    });
  };

  
  return (
    <TouchableOpacity style={style.messageCardContainer} onPress={handlePress}>
      <View style={style.MessageCardView1}>
        <View style={style.MessageCardView2}>
          <Image
            source={{uri: baseUrl+ props.image}}
            style={style.MessageCardImage}
          />
        </View>

        <View style={style.MessageCardView3}>
          <View>
            <Text style={style.MessageCardText}>
            {props.name}
            </Text>
            <Text style={{color:'gray'}}>{props.message}</Text>
          </View>
        </View>
      </View>
      <MessageCountBadge count={props.count} time={props.time} />
    </TouchableOpacity>
  );
}
