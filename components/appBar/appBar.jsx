import { Text, View } from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import  {styles}  from './appBarStyle';
import { Link } from 'expo-router';

export default function AppBar() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
  return (
    <View style={styles.appBar}>
      <Link href={'/dashboard'}>
        <Avatar.Image size={55} source={require('../../assets/images/AVATAR.png')} />      
      </Link>
        <View style={styles.sell_BuyContainer}>
          <TextInput mode='outlined' label={'شراء'} style={styles.input} outlineStyle={{borderColor:'green' , borderWidth:3}}/>
          <TextInput mode='outlined' label={'بيع'} style={styles.input} outlineStyle={{borderColor:'darkred' , borderWidth:3}}/>
        </View>
        <Text style={styles.dateText}> {`${day} / ${month} / ${year}`} </Text>
        <View style={styles.actionBar}>
          <Avatar.Icon size={44} icon="camera" />
          <Link href={'/addClient'}>
            <Avatar.Icon size={44} icon="account-plus" />          
          </Link>
          <Avatar.Icon size={44} icon="account-search" />
          <Avatar.Icon size={44} icon="receipt" />
          <Link href={'/transactions'}>
            <Avatar.Icon size={44} icon="plus-circle" />          
          </Link>
        </View>
      </View>
  )
}

