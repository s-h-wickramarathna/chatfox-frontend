import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import baseUrl from '../baseurl';
import {useNavigation} from '@react-navigation/native';

export default function MyProfile() {
  const [details, setDetails] = useState();

  const [profileImage, setProfileImage] = useState(
    'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png',
  );
  const [imageObject, setImageObject] = useState();
  const [isDetailsLoaded, setIsDetailsLoad] = useState(false);

  // const handelDetails = jsonText => {
  //   const parsedObject = JSON.parse(jsonText);
  //   setDetails(parsedObject);
  //   setProfileImage(parsedObject.image);
  // };

  const handleNameChange = text => {
    // Create a new object with the updated name property
    setDetails({...details, name: text});
  };

  const handleAboutChange = text => {
    // Create a new object with the updated name property
    setDetails({...details, about: text});
  };

  const navigation = useNavigation();
  const goToMyProfile = () => {
    navigation.navigate('myProfile');
  };

  const loadMyDetails = async () => {
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        // handelDetails(request.responseText);
        setDetails(JSON.parse(request.responseText));
        setProfileImage(baseUrl+JSON.parse(request.responseText).image);
        console.log(baseUrl+JSON.parse(request.responseText).image); 
      }
    };

    request.open(
      'GET',
      baseUrl + 'chatfox/myProfile.php?u=' + JSON.parse(userJSONText),
      true,
    );
    request.send();
  };

  useEffect(() => {
    async function loadDetails() {
      await loadMyDetails();
    }
    loadDetails();
  }, []);

  const updateProfile = async () => {
    const userJSONText = await AsyncStorage.getItem('user_id');
    var request = new XMLHttpRequest();
    var form = new FormData();
    form.append('name', details.name);
    form.append('about', details.about);
    form.append('mobile', details.mobile);
    form.append('image', imageObject);
    form.append('id', JSON.parse(userJSONText));
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        loadMyDetails();
      }
    };

    request.open(
      'POST',
      baseUrl + 'chatfox/updateProfile.php?u=' + JSON.parse(userJSONText),
      true,
    );
    request.send(form);
  };

  const getProfileimage = async () => {
    const options = {
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);

    if (result.didCancel == true) {
    } else {
      const image = {
        uri: result.assets[0].uri,
        name: 'profile.png',
        type: 'image/jpeg',
      };
      setProfileImage(result.assets[0].uri);
      setImageObject(image);
    }
  };

  useEffect(() => {
    setIsDetailsLoad(true);
  }, [details]);

  return (
    <SafeAreaView style={style.mainSafe}>
      <View>
        <View style={style.myProfileView1}>
          <View style={style.myProfileView2}>
            <Image
              source={{
                uri: profileImage+ '?' + new Date(),
              }}
              style={style.myProfileImage1}
            />

            <View style={style.myProfileView3}>
              <TouchableOpacity
                style={style.myProfileTucheble1}
                onPress={getProfileimage}>
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
                value={details?.name}
                style={style.myProfiletextInput1}
                onChangeText={handleNameChange}
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
                placeholder="Type Anything You Like ...."
                placeholderTextColor="gray"
                style={style.myProfileTextInput2}
                value={details?.about}
                onChangeText={handleAboutChange}
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
              <Text style={style.myProfileText5}>{details?.mobile}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={style.myProfileToucheble2}
        onPress={updateProfile}>
        <Text style={style.myProfileText6}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
