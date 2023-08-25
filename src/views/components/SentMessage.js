import {Text, View} from 'react-native';
import React from 'react';
import { style } from '../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SentMessage(props) {
  return (
    <>
      {/* Sent Message */}
      <View style={style.sentMessageView1}>
        <View style={style.sentMessageView2}>
          <View
            style={style.sentMessageView3}>
            <View>
              <Text
                style={style.sentMessageText1}>
                {props.msg}
              </Text>
            </View>
            <View style={style.sentMessageView4}>
              <Text style={style.sentMessageText2}>{props.time} </Text>
              <Icon
                name="check"
                size={15}
                color="#000"
                style={style.sentMessageIcon}
              />
            </View>
          </View>
        </View>
      </View>
      {/* Sent Message */}
    </>
  );
}

