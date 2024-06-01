import React, { useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { styles } from "./dailyPriceStyle";
import {colors} from '../../constants/theme.json'
import { Avatar, Button, TextInput } from 'react-native-paper';
import useStore from "../../zustand/useStore";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function dailyPrice() {
    const user = useStore((state) => state.user);
    const setUser = useStore((state) => state.setUser);
    const goldBuy = useStore((state)=>state.goldBuy);
    const setGoldBuy = useStore((state)=>state.setGoldBuy);
    const goldSell = useStore((state)=>state.goldSell);
    const setGoldSell = useStore((state)=>state.setGoldSell);
    const dollarBuy = useStore((state)=>state.dollarBuy);
    const setDollarBuy = useStore((state)=>state.setDollarBuy);
    const dollarSell = useStore((state)=>state.dollarSell);
    const setDollarSell = useStore((state)=>state.setDollarSell);
    const ounceSell = useStore((state)=>state.ounceSell);
    const setOunceSell = useStore((state)=>state.setOunceSell);

    const handleUpdatePrices = async ()=>{
        AsyncStorage.setItem("prices" , JSON.stringify({goldBuy , goldSell , dollarBuy,dollarSell,ounceSell})).then(()=>{
            Toast.show({
                type: 'success',
                text1: 'GOLDHUB TEAM',
                text2: 'تم تحديث السعر في التطبيق بالكامل'
            });
        }).catch((err)=>{
            Toast.show({
                type: 'error',
                text1: 'GOLDHUB TEAM',
                text2: 'حدثت مشكلة حاول مرة اخري'
            });
            console.log("Problem in updating Prices" , err)
        })
    }
    useEffect(()=>{
        AsyncStorage.getItem("prices").then((prices)=>{
            let pricesObject = JSON.parse(prices)
            setGoldBuy(pricesObject.goldBuy)
            setGoldSell(pricesObject.goldSell)
            setDollarBuy(pricesObject.dollarBuy)
            setDollarSell(pricesObject.dollarSell)
            setOunceSell(pricesObject.ounceSell)
        }).catch((err)=>{
            console.log("Problem in getting Prices" , err)
        })
    },[])
  return (
    <View style={styles.container}>
        <View style={{zIndex:9999}}>
            <Toast/>
        </View>
        <View style={styles.box}>
            <Text style={styles.title}>
                سعر الدهـــب
            </Text>
            <View style={styles.inputContainer}>
                <TextInput keyboardType="number-pad" mode='outlined' label={'شراء'} style={styles.input} outlineStyle={{borderColor:'green' , borderWidth:3}} 
                value={goldBuy}
                onChangeText={(goldBuy)=>setGoldBuy(goldBuy)}/>
                <TextInput keyboardType="number-pad" mode='outlined' label={'بيع'} style={styles.input} outlineStyle={{borderColor:'darkred' , borderWidth:3}}
                value={goldSell}
                onChangeText={(goldSell)=>setGoldSell(goldSell)}/>
            </View>
            
        </View>
        <View style={styles.box}>
            <Text style={styles.title}>
                سعرالدولار
            </Text>
            <View style={styles.inputContainer}>
                <TextInput keyboardType="number-pad"  mode='outlined' label={'شراء'} style={styles.input} outlineStyle={{borderColor:'green' , borderWidth:3}}
                value={dollarBuy}
                onChangeText={(dollarBuy)=>setDollarBuy(dollarBuy)}/>
                <TextInput keyboardType="number-pad" mode='outlined' label={'بيع'} style={styles.input} outlineStyle={{borderColor:'darkred' , borderWidth:3}}
                value={dollarSell}
                onChangeText={(dollarSell)=>setDollarSell(dollarSell)}/>
            </View>
        </View>
        <View style={styles.box}>
            <Text style={styles.title}>
                سعر الوقيه
            </Text>
            <TextInput keyboardType="number-pad" mode='outlined' label={'شراء'} style={styles.input} 
            value={ounceSell}
            onChangeText={(ounceSell)=>setOunceSell(ounceSell)}/>
            <Button icon="update" buttonColor={colors.background} mode="contained" onPress={handleUpdatePrices}>
                تحديث الاسعار
            </Button>      
        </View>
    </View>
  );
}


