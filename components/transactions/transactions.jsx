import { React, useState, useEffect } from "react";
import { Text, View, FlatList } from 'react-native';
import { styles } from "./transactionsStyle";
import TransactionsFooter from '../transactionsfooter/transactionsFooter'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Transactions() {
  const [data, setData] = useState([]);
  const getTransactions = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);

      const transactions = [];
      result.forEach(([key, value]) => {
        if (value) {
          try {
            const parsedValue = JSON.parse(value);
            transactions.push(parsedValue);
          } catch (e) {
            console.log(`Error parsing value for key ${key}:`, e);
          }
        } else {
          console.log(`No value found for key ${key}`);
        }
      });

      return transactions;
    } catch (err) {
      console.log('Problem getting the transactions', err);
      return [];
    }
  };

  const fetchData = async () => {
    const transactions = await getTransactions();
    setData(transactions);
    console.log(transactions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    if (item.transactionNumber) {
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