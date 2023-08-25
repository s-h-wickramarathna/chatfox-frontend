import {Text, View, Image } from 'react-native'
import React from 'react'
import { style } from '../styles/style'

export default function ChatUserDetails(props) {
  return (
    <View style={style.userDetailsMain}>
          <View style={style.userDetailsSub}>
            <Image
              source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={style.userDetailsImage}
            />
          </View>

          <View
            style={style.userDetailsNameView}>
            <View>
              <Text style={style.userDetailsName}>
                {props.name}
              </Text>
            </View>
          </View>
        </View>
  )
}
