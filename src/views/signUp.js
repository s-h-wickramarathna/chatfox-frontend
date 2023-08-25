import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './styles/style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function signUp() {
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
  );
  const [imageObject, setImageObject] = useState(null);
  const [newPassword, setNewPasword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const countries = ['Matara', 'Galle', 'Colombo', 'Tangalle'];
  const navigation = useNavigation();

  const imagePicker = async () => {
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
  };

  const signUp = () => {
    const form = new FormData();
    form.append('userName', name);
    form.append('newPassword', newPassword);
    form.append('confirmPassword', confirmPassword);
    form.append('userMobile', mobile);
    form.append('userCity', city);
    form.append('profileimage', imageObject);

    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
      if(request.readyState == 4 && this.status == 200){
        var response = request.responseText;
        if(response == "1"){
          navigation.navigate('signIn');
        }else{
        Alert.alert("Massage",response);
      }

      }
    }
    request.open("POST","http://192.168.8.106/chatfox/signUp.php",true);
    request.send(form);

  };

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
              <TouchableOpacity
                style={style.myProfileTucheble1}
                onPress={imagePicker}>
                <Icon name="camera" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.inputSet}>
          <View style={style.signUpView1}>
            <TextInput
              style={style.signUpTextInput1}
              placeholder="Your Name"
              onChangeText={setName}
            />
            <Icon name="user" size={25} color="black" style={style.inputIcon} />
          </View>
          <View style={style.signUpView1}>
            <TextInput
              style={style.signUpTextInput1}
              placeholder="New Password"
              onChangeText={setNewPasword}
            />
            <Icon name="key" size={25} color="black" style={style.inputIcon} />
          </View>
          <View style={style.signUpView1}>
            <TextInput
              style={style.signUpTextInput1}
              placeholder="Confirm Password"
              onChangeText={setConfirmPassword}
            />
            <Icon name="key" size={25} color="black" style={style.inputIcon} />
          </View>
          <View style={style.signUpView1}>
            <TextInput
              style={style.signUpTextInput1}
              placeholder="Your Mobile Number"
              keyboardType="numeric"
              onChangeText={setMobile}
            />
            <Icon
              name="mobile"
              size={25}
              color="black"
              style={style.inputIcon}
            />
          </View>
          <View style={style.signUpView1}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                setCity(selectedItem);
              }}
              buttonStyle={style.signUpSelect}
              defaultButtonText="Select Your Country"
            />
            <Icon
              name="globe"
              size={25}
              color="black"
              style={style.inputIcon}
            />
          </View>
        </View>
        <View style={style.signUpView2}>
          <TouchableOpacity style={style.signUpBtn2}>
            <Text style={style.signUpText1}>Go to Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.signUpBtn1} onPress={signUp}>
            <Text style={style.signUpText1}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

