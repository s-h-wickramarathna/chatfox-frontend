import {Text, View } from 'react-native'
import React from 'react'
import { style } from '../styles/style'

export default function MessageCountBadge(props) {
  return (
    <View
        style={style.MassageCountBadgeView1}>
        <View style={style.MassageCountBadgeView2}>
          <Text style={style.MassageCountBadgeText1}>{props.count}</Text>
        </View>
        <View style={style.MassageCountBadgeView3}>
          <Text style={style.MassageCountBadgeText2}>{props.time}</Text>
        </View>
      </View>
  )
}
