import { React, useState, useEffect } from "react";
import { Text, View, FlatList } from 'react-native';
import { styles } from "./transactionsStyle";
import TransactionsFooter from '../transactionsfooter/transactionsFooter'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Transactions(props) {
  let {reload} = props
  const [data, setData] = useState([]);
  
  const getTransactions = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
  
      const transaction= {};
      result.forEach(([key, value]) => {
        if (value) {
          try {
            transaction[key] = JSON.parse(value);
          } catch (e) {
            console.log(`Error parsing value for key ${key}:`, e);
          }
        } else {
          transaction[key] = value; 
        }
      });
      // console.log("transaction", transaction);
      return transaction;
    } catch (err) {
      console.log('Problem getting the transaction', err);
      return {};
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const transaction= await getTransactions();
      const transactionsArray = Object.values(transaction);
      setData(transactionsArray);
      // console.log("Dataaaaaa",data);
    };
    fetchData();
  }, [reload]);


  const renderItem = ({ item }) => {
    if (item.transactionNumber) {
      // console.log("itemmmmmmmmm",item);
      return (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.totalCash}</Text>
          <Text style={styles.cardTitle}>{item.transactionValue}</Text>
          <Text style={styles.cardTitle}>{item.treasury}</Text>
          <Text style={styles.cardTitle}>{item.clientCode}</Text>
          <Text style={styles.cardTitle}>{item.transactionNumber}</Text>
        </View>
      );
    }
      
  };
  
  
  

  return (
    <View style={styles.container}>
      <View style={styles.transactionsTitle}>
        <Text style={styles.txt}>اجمالى النقديه</Text>
        <Text style={styles.txt}>قيمة الحركه</Text>
        <Text style={styles.txt}>الخزنه</Text>
        <Text style={styles.txt}>العميل</Text>
        <Text style={styles.txt}>رقم الحركه</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
        scrollEnabled
      />
      <TransactionsFooter index={0} />
    </View>
  );
}