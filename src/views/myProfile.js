import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function myProfile() {
  const [details, setDetails] = useState([]);
  const [profileImage,setProfileImage] = useState('');
  const [imageObject,setImageObject] = useState();
  

  const loadMyDetails = async () => {
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // console.log(request.responseText);
        setDetails(JSON.parse(request.responseText));
      }
    };

    request.open(
      'GET',
      'http://192.168.8.106/chatfox/myProfile.php?u=' + userJSONText,
      true,
    );
    request.send();
  };

  useEffect(() => {
    loadMyDetails();
  },[]);

  const getProfileimage = async()=>{
    const options = {
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);

    if (result.didCancel == true) {
      setProfileImage(
        'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
      );
    } else {
      const image = {
        uri: result.assets[0].uri,
        name: 'profile.png',
        type: 'image/jpeg',
      };
      setProfileImage(result.assets[0].uri);
      setImageObject(image);
    }
  }


  console.log(details);
  return (
    <SafeAreaView style={style.mainSafe}>
      <View>
        <View style={style.myProfileView1}>
          <View style={style.myProfileView2}>
            <Image
              source={{
                uri: profileImage,
              }}
              style={style.myProfileImage1}
            />

            <View style={style.myProfileView3}>
              <TouchableOpacity style={style.myProfileTucheble1} onPress={getProfileimage}>
                <Icon name="camera" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={style.myProfileView4}>
          <View style={style.myProfileView5}>
            <Icon name="user-o" size={35} color="black" />
          </View>
          <View style={style.myProfileView6}>
            <View>
              <Text style={style.myProfileText1}>Name</Text>
            </View>
            <View style={style.myProfileView7}>
              <TextInput
                placeholder="sanchitha"
                // value={}
                style={style.myProfiletextInput1}
                onChangeText={(text)=>{details.name}}
              />
              <Text style={style.myProfileText2}>
                This is not your username or pin this name will be visible to
                your ChatFox content
              </Text>
            </View>
          </View>
        </View>

        <View style={style.myProfileView10}>
          <View style={style.myProfileView11}>
            <Icon name="info" size={35} color="black" />
          </View>
          <View style={style.myProfileView12}>
            <View>
              <Text style={style.myProfileText3}>About</Text>
            </View>
            <View style={style.myProfileView14}>
              <TextInput
                placeholder="sanchitha"
                style={style.myProfileTextInput2}
                value={details.about}
              />
            </View>
          </View>
        </View>

        <View style={style.myProfileView16}>
          <View style={style.myProfileView17}>
            <Icon name="phone" size={35} color="black" />
          </View>
          <View style={style.myProfileView18}>
            <View>
              <Text style={style.myProfileText4}>Phone</Text>
            </View>
            <View style={style.myProfileView20}>
              <Text style={style.myProfileText5}>{details.mobile}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={style.myProfileToucheble2}>
        <Text style={style.myProfileText6}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}