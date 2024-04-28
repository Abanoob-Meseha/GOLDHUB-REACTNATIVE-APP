import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';
import {colors} from "../constants/theme.json"
import COLORS from '../constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width:'80%', height:'30%'}} source={require('../assets/images/LOGO.png')}></Image>
      <Text style={styles.welcomeText}> أهلا بك بـــعـــالـــم الــــذهـــــــب </Text>
      
      <Link href="/login" asChild>
        <Button style={styles.BTN} labelStyle={{fontSize:20}} textColor={colors.secondary} icon="login" mode="elevated" onPress={() => console.log('Pressed')}>
          لدي حساب بالفعل 
        </Button>
      </Link>
      <Link href="/register" asChild>
        <Button style={styles.BTN} labelStyle={{fontSize:20 }} textColor={colors.secondary} icon="gold" mode="contained" onPress={() => console.log('Pressed')}>
          ابــــدأ الان
        </Button>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
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
  BTN:{
    width:'80%',
    height:70,
    marginTop:'5%',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
