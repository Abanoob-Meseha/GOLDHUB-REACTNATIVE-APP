import { React, useState, useEffect } from "react";
import { Text, View, FlatList } from 'react-native';
import { styles } from "./transactionsStyle";
import TransactionsFooter from '../transactionsfooter/transactionsFooter'

export default function Transactions() {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    
  }, []);


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