import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./addTransactionStyle";
import { Dropdown } from 'react-native-element-dropdown';
import { moveTypes} from '../../data/basicData.json'
import TransactionsFooter from '../transactionsfooter/transactionsFooter'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput , Button } from 'react-native-paper';
import {colors} from '../../constants/theme.json'
import useStore from "../../zustand/useStore";

export default function addTransaction() {
  const [treasury , setTreasury ] = useState('');
  const [clientName , setClientName ] = useState('');
  const [moveType , setMoveType ] = useState('');
  const [move , setMove ] = useState('');
  const [transactionNumber , setTransactionNumber ] = useState(0);
  const [transactionValue , setTransactionValue ] = useState(0);
  const [factor , setFactor ] = useState(0);
  const [valueAsGold , setValueAsGold ] = useState(0);
  const [gramValue , setGramValue ] = useState(0);
  const [priceAsGold , setPriceAsGold ] = useState(0);
  const [totalCash , setTotalCash ] = useState(0);
  const [clientsDropdown , setClientsDropdown] = useState([])
  const clients = useStore((state)=>state.clients);

  const saveClient = async (userId,user) => {
    try {
      await AsyncStorage.setItem(userId, JSON.stringify(user));
      console.log("Saved user", user);
    } catch (err) {
      console.log('Problem saving the user', err);
    }
  };
const handleTransactionSave = async () => {
  const transaction = {
    treasury,
    clientCode,
    moveType,
    move,
    transactionNumber,
    transactionValue,
    factor,
    valueAsGold,
    gramValue,
    priceAsGold,
    totalCash
  };
  await saveClient(treasury, transaction);
  
};
  useEffect(()=>{
    let clientsData = clients.map((client ,index)=>{
      return({"label":client.name , "value":client.name})
    })
    setClientsDropdown(clientsData)
  },[clients])
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[{width:"30%"}, styles.field]}>
          <Dropdown
          labelField="label"
          valueField="value"
          data={moveTypes}
          value={treasury}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={item => setTreasury(item.value)}
          placeholder={'الخزنه - كود الخزنه'}
          />
        </View>
        <View style={[{width:"40%"}, styles.field]}>
          <Dropdown
          labelField="label"
          valueField="value"
          data={clientsDropdown}
          value={clientName}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={item => setClientName(item.value)}
          placeholder={'العميل - كود العميل'}
        />
        </View>
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="رقم الحركة النسبي"
          value={transactionNumber}
          textColor={colors.primary}
          disabled
          style={{width : '20%' }}
          onChangeText={transactionNumber => setTransactionNumber(transactionNumber)}
        />
      </View>
      <View style={styles.row}>           
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="المعامل"
          value={factor}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={factor => setFactor(factor)}
        />
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="قيمة الحركة"
          value={transactionValue}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={transactionValue => setTransactionValue(transactionValue)}
        />
        <View style={[{width:"20%"}, styles.field]}>
          <Dropdown
          labelField="label"
          valueField="value"
          data={moveTypes}
          value={moveType}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={item => setMoveType(item.value)}
          placeholder={'نوع الحركه'}
          />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
          <Dropdown
          labelField="label"
          valueField="value"
          data={moveTypes}
          value={move}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={item => setMove(item.value)}
          placeholder={'الحركه'}
        />
        </View>
      </View>
      <View style={styles.row}>
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="اجمالي النقدية"
          value={totalCash}
          textColor={colors.primary}
          style={{width : '30%' }}
          onChangeText={totalCash => setTotalCash(totalCash)}
        />
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="الاجرة كذهب 21"
          value={priceAsGold}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={priceAsGold => setPriceAsGold(priceAsGold)}
        />
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="اجرة الجرام .."
          value={gramValue}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={gramValue => setGramValue(gramValue)}
        />
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="القيمة كذهب 21"
          value={valueAsGold}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={valueAsGold => setValueAsGold(valueAsGold)}
        />
      </View>
    <TransactionsFooter index ={1} handleTransactionSave = { handleTransactionSave}/>
    </View>
  );
}
