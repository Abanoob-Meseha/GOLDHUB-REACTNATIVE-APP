import { StyleSheet, View, Text, Alert } from 'react-native';
import { Modal, Portal, TextInput, Checkbox, Button, ActivityIndicator } from 'react-native-paper';
import { useState } from 'react';
import COLORS from '../../constants/colors';
import { colors } from "../../constants/theme.json";
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as LocalAuthentication from 'expo-local-authentication';
import { router, Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [brand, setBrand] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [fingerprint, setFingerprint] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(false); // New state to track validation

  const hideModal = () => setVisible(false);

  const handleLocalAuth = async () => {
    setVisible(true);
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      console.log('Authentication successful');
      hideModal();
      router.replace('/dashboard');
    } else {
      console.log('Authentication failed');
    }
  };

  const getUsers = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      const user = {};
      result.forEach(([key, value]) => {
        if (value) {
          try {
            user[key] = JSON.parse(value);
          } catch (e) {
            console.log(`Error parsing value for key ${key}:`, e);
          }
        } else {
          user[key] = value;
        }
      });
      return user;
    } catch (err) {
      console.log('Problem getting the user', err);
      return {};
    }
  };

  const loginValidation = async () => {
    let users = await getUsers();
    const userArray = Object.values(users);
    const loginData = [brand, username, password];
    for (let i = 0; i < userArray.length; i++) {
      const savedUser = [];
      for (const [key, value] of Object.entries(userArray[i])) {
        savedUser.push(value);
      }
      if (savedUser[0] === loginData[0] && savedUser[1] === loginData[1] && savedUser[4] === loginData[2]) {
        return true;
      }
    }
    return false;
  };

  const handleLogin = async () => {
    const isValid = await loginValidation();
    setIsLoginValid(isValid);
    if (!isValid && !brand && !username) {
      Alert.alert('تأكد من الاسم وكلمة المرور', '', [
        {text: 'ok', onPress: () => console.log("invalid login")},
      ])
    } else {
      Alert.alert('تم تسجيل الدخول بنجاح', '', [
        {text: 'ok', onPress: () => router.push('/dashboard')},
      ])
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> تسجيل الدخول </Text>
      <View style={styles.form}>
        <TextInput
          label="اسم البراند الخاص بك"
          right={<TextInput.Icon icon="store" color={colors.primary} />}
          value={brand}
          mode='outlined'
          style={styles.input}
          onChangeText={brand => setBrand(brand)}
        />
        <TextInput
          mode='outlined'
          right={<TextInput.Icon icon="account" color={colors.primary} />}
          label="اسم المستخدم الخاص بك"
          value={username}
          style={styles.input}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          right={<TextInput.Icon icon="eye" color={colors.primary} onPress={() => { setHidePassword(!hidePassword); }} />}
          mode='outlined'
          label="الرقم السري الخاص بك"
          value={password}
          style={styles.input}
          secureTextEntry={hidePassword}
          onChangeText={password => setPassword(password)}
        />
        <View style={styles.rememberMeContainer}>
          <Text style={styles.forgotText}>
            نسيت كلمة السر
          </Text>
          <Text style={styles.rememberMeText}>
            تذكرني
          </Text>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Button
          style={styles.loginButton}
          labelStyle={{ fontSize: 20 }}
          textColor={colors.secondary}
          icon="login"
          mode="contained"
          onPress={handleLogin}
        >
          تـسجيـــل الـدخـــول
        </Button>
      </View>
      <View style={styles.fingerSectionContainer}>
        <Icon name='fingerprint' size={100} color={colors.primary} />
        <Button mode='elevated' style={{ marginTop: 30 }} onPress={handleLocalAuth}>
          سجل الدخول عن طريق البصمة
        </Button>
      </View>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalStyle}>
          <Text style={{ textAlign: 'center', marginBottom: '3%' }}>
            جاري مسح مستشعر البصمة
          </Text>
          <Icon name='fingerprint' size={50} color={colors.primary} style={{ marginBottom: '3%' }} />
          <ActivityIndicator animating={true} color={colors.primary} />
        </Modal>
      </Portal>
    </View>
  );
}
 
const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
      backgroundColor: COLORS.dark,
    },
    title:{
      color:COLORS.Gold,
      fontSize:50,
      fontWeight:"bold",
      textAlign:'center',
      marginBottom:'3%',
    },
    form:{
      width:'80%',
      alignSelf:'center',
    },
    input:{
      marginBottom:'5%',
      height:60,
      fontSize:20,
      textAlign:'right',
    },
    rememberMeContainer:{
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'flex-end'
    },
    rememberMeText:{
      color:colors.primary,
      fontSize:25,
      fontWeight:'bold',
      marginRight:'3%' 
    },
    forgotText:{
      color:colors.secondary,
      fontSize:18,
      marginRight:'30%',
      textDecorationLine:'underline',
    },
    modalStyle:{
      backgroundColor:colors.secondaryContainer,
      padding:'2%',
      borderRadius:10,
      alignItems:'center',
    },
    loginButton:{
      height:70,
      marginTop:'9%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fingerSectionContainer:{
      alignItems:'center',
      marginTop:'10%'
    }
})