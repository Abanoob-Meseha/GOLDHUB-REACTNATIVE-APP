import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';
import COLORS from './src/constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width:'80%', height:'30%'}} source={require('./assets/images/LOGO.png')}></Image>
      <Text style={styles.welcomeText}> أهلا بك بـــعـــالـــم الــــذهـــــــب </Text>
      <TouchableOpacity style={styles.primaryBTN}>
        <Text style={styles.btnP_Text}> ابـــدأ الان </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.seconderyBTN}>
        <Text style={styles.btnS_Text}> لدي حساب بالفعل </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText:{
    color:COLORS.Gold,
    fontSize:60,
    fontWeight:'bold',
    textShadowColor:'black',
    textAlign:'center',
    marginTop:'10%'
  },
  primaryBTN:{
    width:"70%",
    height:70,
    borderRadius:20,
    backgroundColor:COLORS.gray,
    marginTop:30,
    paddingVertical:'1%',
    borderColor:COLORS.Gold,
    borderWidth:3,
  },
  btnP_Text:{
    color:COLORS.Gold,
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center'
  },
  seconderyBTN:{
    width:"70%",
    height:70,
    borderRadius:20,
    backgroundColor:COLORS.Gold,
    paddingVertical:'2%',
    borderColor:COLORS.gray,
    borderWidth:3,
    marginTop:15,

  },
  btnS_Text:{
    color:COLORS.gray,
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
  }
});
