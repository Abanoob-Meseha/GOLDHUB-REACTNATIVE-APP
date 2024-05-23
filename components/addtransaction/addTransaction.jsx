import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./addTransactionStyle";
import { Dropdown } from 'react-native-element-dropdown';
import {client , outPrice, moveTypes} from '../../data/basicData.json'
import TransactionsFooter from '../transactionsfooter/transactionsFooter'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function addTransaction(props) {
  const [treasury , setTtreasury ] = useState(false);
  const [clientCode , setClientCode ] = useState(false);
  const [moveType , setMoveType ] = useState(false);
  const [move , setMove ] = useState(false);
  const [transactionNumber , setTransactionNumber ] = useState(false);
  const [transactionValue , setTransactionValue ] = useState(false);
  const [factor , setFactor ] = useState(false);
  const [valueAsGold , setValueAsGold ] = useState(false);
  const [gramValue , setGramValue ] = useState(false);
  const [priceAsGold , setPriceAsGold ] = useState(false);
  const [totalCash , setTotalCash ] = useState(false);

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
          onChange={item => setTtreasury(item.value)}
          placeholder={'الخزنه - كود الخزنه'}
          />
        </View>
        <View style={[{width:"40%"}, styles.field]}>
          <Dropdown
          labelField="label"
          valueField="value"
          data={moveTypes}
          value={clientCode}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={item => setClientCode(item.value)}
          placeholder={'العميل - كود العميل'}
        />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          onChangeText={text => setTransactionNumber(text)}
          value={transactionNumber}
          style={styles.goldenInput}
          placeholder="رقم الحركه النسبى"
        />
        </View>
      </View>
      <View style={styles.row}>
      <View style={[{width:"20%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          style={styles.goldenInput}
          placeholder="المعامل"
          onChangeText={text => setFactor(text)}
          value={factor}
        />
        </View>
        <View style={[{width:"30%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          style={styles.normalInput}
          placeholder="قيمة الحركه"
          onChangeText={text => setTransactionValue(text)}
          value={transactionValue}
        />
        </View>
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
        <View style={[{ width: "30%" }, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          style={styles.goldenInput}
          placeholder="اجمالى النقديه"
          onChangeText={text => setTotalCash(text)}
          value={totalCash}
        />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          style={styles.goldenInput}
          placeholder=" الاجره كذهب 21"
          onChangeText={text => setPriceAsGold(text)}
          value={priceAsGold}
        />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          style={styles.normalInput}
          placeholder="اجرة الجرام ..."
          onChangeText={text => setGramValue(text)}
          value={gramValue}
        />
        </View>
        <View style={[{width:"25%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          style={styles.goldenInput}
          placeholder="القيمه كذهب 21"
          onChangeText={text => setValueAsGold(text)}
          value={valueAsGold}
        />
        </View>
      </View>
    <TransactionsFooter index ={1} handleTransactionSave = { handleTransactionSave}/>
    </View>
  );
}
