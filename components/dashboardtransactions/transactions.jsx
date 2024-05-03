import React from "react";
import { Text, View, FlatList } from 'react-native';
import { styles } from "./transactionsStyle";

export default function Transactions() {
  const data = [
    {
      id: "transaction1",
      name: "حماده",
      price: "1000$",
      date: "12/12/2011",
      type: "sell"
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
        name: "2حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction33",
        name: "2حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction336",
        name: "2حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction33433",
        name: "2حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction3312",
        name: "2حماده",
        price: "2000$",
        date: "12/12/2012",
        type: "buy"
      },
      {
        id: "transaction3323",
        name: "2حماده",
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
          عرض الكل
        </Text>
        <Text style={styles.showMore}>
        موقف شراء  / بيع
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