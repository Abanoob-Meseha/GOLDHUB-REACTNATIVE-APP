import { Text, View } from 'react-native'
import { Avatar, IconButton, TextInput } from 'react-native-paper';
import  {styles}  from './appBarStyle';
import { Link } from 'expo-router';
import useStore from '../../zustand/useStore'
import { useEffect } from 'react';
import { updateProperty } from '../../utils/asyncStorage.util';
import {colors} from '../../constants/theme.json'
export default function AppBar() {
    const date = useStore((state) => state.date)
    const setDate = useStore((state) => state.setDate)
    const goldBuy = useStore((state)=>state.goldBuy);
    const setGoldBuy = useStore((state)=>state.setGoldBuy);
    const goldSell = useStore((state)=>state.goldSell);
    const setGoldSell = useStore((state)=>state.setGoldSell);
    const appBarIndex = useStore((state)=>state.appBarIndex)
    const setAppBarIndex = useStore((state)=>state.setAppBarIndex)

    const dayDate = new Date();
    let day = dayDate.getDate();
    let month = dayDate.getMonth() + 1;
    let year = dayDate.getFullYear();
    setDate({day , month , year})

  useEffect(() => {
    updateProperty('prices' , 'goldBuy' , goldBuy).then(()=>{
      updateProperty('prices' , 'goldSell' , goldSell)
    })

  }, [goldBuy ,goldSell])
  
  return (
    <View style={styles.appBar}>
      <Link href={'/dashboard'}>
        <Avatar.Image size={55} source={require('../../assets/images/AVATAR.png')} />      
      </Link>
        <View style={styles.sell_BuyContainer}>
          <TextInput mode='outlined' label={'شراء'} style={styles.input} outlineStyle={{borderColor:'green' , borderWidth:3}}
          value={goldBuy} onChangeText={(goldBuy)=>setGoldBuy(goldBuy)} keyboardType={'numeric'}/>
          <TextInput mode='outlined' label={'بيع'} style={styles.input} outlineStyle={{borderColor:'darkred' , borderWidth:3}}
          value={goldSell} onChangeText={(goldSell)=>setGoldSell(goldSell)} keyboardType={'numeric'}/>
        </View>
        <Text style={styles.dateText}> {`${day} / ${month} / ${year}`} </Text>
        <View style={styles.actionBar}>
          <IconButton size={30} icon="camera" />
          <IconButton size={30} icon="account-search" iconColor={appBarIndex==0?colors.primary:'grey'} onPress={()=>setAppBarIndex(0)}/>
          <IconButton size={30} icon="account-plus" iconColor={appBarIndex==1?colors.primary:'grey'} onPress={()=>setAppBarIndex(1)}/>          
          <IconButton size={30} icon="plus-circle" iconColor={appBarIndex==2?colors.primary:'grey'} onPress={()=>setAppBarIndex(2)}/>          
          <IconButton size={30} icon="receipt" iconColor={appBarIndex==3?colors.primary:'grey'} onPress={()=>setAppBarIndex(3)}/>          

        </View>
      </View>
  )
}

