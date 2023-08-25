import {Text, View} from 'react-native';
import React from 'react';
import { style } from '../styles/style';

export default function RecivedMassage(props) {
  return (
    <>
      {/* recived Message */}
      <View
        style={style.RecivedMessageView1}>
        <View style={style.RecivedMessageView2}>
          <View
            style={style.RecivedMessageView3}>
            <View>
              <Text style={style.RecivedMessageText1}>
               {props.msg}
              </Text>
            </View>
            <View style={style.RecivedMessageView4}>
              <Text style={style.RecivedMessageText2}>9:30 PM</Text>
            </View>
          </View>
        </View>
      </View>
      {/* recived Message */}
    </>
  );
}

