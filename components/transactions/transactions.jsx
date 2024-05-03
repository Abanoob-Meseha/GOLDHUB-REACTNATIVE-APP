import React from "react";
import { Text, View, FlatList } from 'react-native';
import { styles } from "./transactionsStyle";

export default function Transactions() {
  const data = [
    {
      id: "transaction1",
      name: "1حماده",
      price: "1000$",
      date: "12/12/2011",
      type: "buy"
    },
    {
      id: "transaction2235",
      name: "2حماده",
      price: "2000$",
      date: "12/12/2012",
      type: "sell"
    },
    {
      id: "transaction332",
      name: "3حماده",
      price: "3000$",
      date: "12/12/2013",
      type: "sell"
    },
    {
        id: "transaction244",
        name: "4حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction33",
        name: "5حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "sell"
      },
      {
        id: "transaction336",
        name: "6حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction33433",
        name: "7حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction3312",
        name: "8حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction3323",
        name: "9حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.date}</Text>
      {item.type == "sell" ?
      <Text style={styles.sellPrice}>{item.price}</Text>
      :
      <Text style={styles.buyPrice}>{item.price}</Text>
    }
      <Text style={styles.cardTitle}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.transactionsTitle}>
        <Text style={styles.txt}>
        رقم الحركه
        </Text>
        <Text style={styles.txt}>
        العميل
        </Text>
        <Text style={styles.txt}>
        الخزنه
        </Text>
        <Text style={styles.txt}>
        قيمة الحركه
        </Text>
        <Text style={styles.txt}>
        اجمالى النقديه
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
        scrollEnabled
      />
    </View>
  );
}