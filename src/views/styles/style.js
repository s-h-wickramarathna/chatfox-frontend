import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainSafe: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    // backgroundColor:"blue",
  },
  iconAlign: {
    flexDirection: 'row',
  },
  mainText: {
    color: '#2c3e50',
    marginLeft: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  mainIconImg: {
    marginRight: 20,
  },
  messageCardContainer: {
    height: 90,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderBottomWidth: 1,
    borderBottomColor: '#0500FF',
  },
  massageImage: {
    height: '100%',
  },
  peopleBtn: {
    width: 60,
    height: 50,
    backgroundColor: '#2980b9',
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetailsMain: {
    width: '70%',
    flexDirection: 'row',
  },
  userDetailsSub: {
    width: '28%',
    justifyContent: 'center',
  },
  userDetailsImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginLeft: 10,
  },
  userDetailsNameView: {
    width: '70%',
    justifyContent: 'center',
  },
  userDetailsName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  MessageCardView1: {
    flex: 4,
    flexDirection: 'row',
  },
  MessageCardView2: {
    width: '30%',
    justifyContent: 'center',
  },
  MessageCardImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
  },
  MessageCardView3: {
    width: '70%',
    marginTop: 15,
  },
  MessageCardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  MassageCountBadgeView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MassageCountBadgeView2: {
    width: 25,
    height: 25,
    backgroundColor: '#292781',
    borderRadius: 25 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MassageCountBadgeText1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  MassageCountBadgeView3: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 3,
  },
  MassageCountBadgeText2: {
    fontSize: 12,
  },
  RecivedMessageView1: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  RecivedMessageView2: {
    marginRight: 5,
    marginRight: 50,
    marginLeft: 5,
  },
  RecivedMessageView3: {
    backgroundColor: '#1abc9c',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopEndRadius: 20,
  },
  RecivedMessageText1: {
    padding: 10,
    fontWeight: '700',
  },
  RecivedMessageView4: {
    alignItems: 'flex-end',
  },
  RecivedMessageText2: {
    marginRight: 15,
    fontSize: 12,
  },
  sentMessageView1: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  sentMessageView2: {
    marginRight: 5,
    marginRight: 5,
    marginLeft: 50,
  },
  sentMessageView3: {
    backgroundColor: '#3498db',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopEndRadius: 20,
  },
  sentMessageText1: {
    padding: 10,
    fontWeight: '700',
    textAlign: 'right',
  },
  sentMessageView4: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft:10,
  },
  sentMessageText2: {
    fontSize: 12,
  },
  sentMessageIcon: {
    marginRight: 5,
  },
  chatView1: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatIcon1: {
    marginLeft: 15,
  },
  chatIcon2: {
    marginLeft: 30,
  },
  chatView2: {
    width: '100%',
    alignItems: 'center',
  },
  chatView3: {
    width: 200,
    backgroundColor: '#f1c40f',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
  },
  chatView4: {
    textAlign: 'center',
    padding: 10,
  },
  chatView5: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: '#D9D9D9',
  },
  chatInput1: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    marginLeft: 10,
    paddingLeft: 10,
  },
  chatIcon3: {
    marginLeft: 15,
  },
  contactView1: {
    width: '100%',
    alignItems: 'center',
  },
  contactInput1: {
    width: '95%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 45,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 25,
    paddingRight: 20,
    fontSize: 18,
  },
  contactView2: {
    width: '100%',
    marginVertical: 20,
  },
  contactText1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  requestToucheble1: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherCardtocheble1: {
    backgroundColor: '#74b9ff',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  otherCardtocheble2: {
    backgroundColor: '#FD7272',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  otherCardText1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  requestText1: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  myProfileView1: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myProfileView2: {
    marginTop: 10,
    height: 150,
    width: 150,
  },
  myProfileImage1: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  myProfileView3: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  myProfileTucheble1: {
    backgroundColor: '#0984e3',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myProfileView4: {
    flexDirection: 'row',
    marginTop: 30,
  },
  myProfileView5: {
    width: '18%',
    alignItems: 'center',
  },
  myProfileView6: {
    width: '82%',
  },
  myProfileText1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  myProfileView7: {
    width: '90%',
  },
  myProfiletextInput1: {
    borderBottomWidth: 1,
    fontSize: 15,
    color: 'black',
  },
  myProfileText2: {
    marginTop: 10,
  },
  myProfileView10: {
    flexDirection: 'row',
    marginTop: 30,
  },
  myProfileView11: {
    width: '18%',
    alignItems: 'center',
  },
  myProfileView12: {
    width: '82%',
  },
  myProfileText3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  myProfileView14: {
    width: '90%',
  },
  myProfileTextInput2: {
    borderBottomWidth: 1,
    fontSize: 15,
    color: 'black',
  },
  myProfileView16: {
    flexDirection: 'row',
    marginTop: 30,
  },
  myProfileView17: {
    width: '18%',
    alignItems: 'center',
  },
  myProfileView18: {
    width: '82%',
  },
  myProfileText4: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  myProfileView20: {
    width: '90%',
  },
  myProfileText5: {
    fontSize: 18,
    marginTop: 5,
  },
  myProfileToucheble2: {
    backgroundColor: '#0984e3',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  myProfileText6: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpView1: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpTextInput1: {
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
    paddingLeft: 45,
    paddingRight: 20,
    fontSize: 15,
  },
  inputSet: {
    marginTop: 50,
  },
  signUpBtn1: {
    backgroundColor: '#22a6b3',
    width: 110,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  signUpBtn2: {
    backgroundColor: '#eb4d4b',
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  signUpText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  signUpView2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  inputIcon: {
    position: 'absolute',
    left: 30,
    bottom: 10,
  },
  signInView1:{
    alignItems:"center",
  },
  signInMainView:{
    justifyContent:'center',
    flex:1,
  },
  signInTopic:{
    fontSize:25,
    fontWeight:"bold",
    color:"#130f40",
    marginTop:20,
  },
  signInBtn:{
    backgroundColor:"#22a6b3",
    width:120,
    height:40,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  signInBtn2:{
    width:200,
    height:40,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
  btnview:{
    alignItems:'center',
    marginTop:40,
  },
  signInText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine:'underline',
  },
  signUpSelect:{
    borderWidth:1,
    borderColor:"black",
    width:"90%",
    borderRadius:20,
  },
  scrollView:{
marginBottom:78,
  },
});

export {style};
