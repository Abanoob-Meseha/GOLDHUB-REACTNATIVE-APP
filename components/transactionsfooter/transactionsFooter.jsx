import React from "react";
import { View } from 'react-native';
import { styles } from "./transactionsFooterStyle";
import { Ionicons } from '@expo/vector-icons'; 
import { Button, TextInput } from 'react-native-paper';
import { Link } from 'expo-router';

export default function TransactionsFooter(props) {
  let {handleTransactionSave, index} = props
  return (
    <View style={styles.container}>
      <View style = {{width: "90%", flexDirection:"row",  justifyContent: "space-between",
        alignItems: "center"}}>
      {index == "1" ? (
        <>
          <Ionicons name="document-text-outline" size={50} color={"#F5D061"} />
            <Button style={styles.deleteTransactions} labelStyle={{ fontSize: 18 }} textColor={"#fff"} mode="contained">
              الغاء المعامله 
            </Button>
            <Button style={styles.addTransactionBtn} labelStyle={{ fontSize: 18 }} textColor={"#fff"} mode="contained" onPress={() => handleTransactionSave()}>
              اضافة معامله 
            </Button>
        </>
      ) : (
        <>
          <TextInput style={styles.input} >
            600000
          </TextInput>
          <TextInput style={styles.input}>
            600000
          </TextInput>
          {/* <Link href={'/addTransaction'} asChild> */}
            <Button style={styles.addTransactionBtn} labelStyle={styles.label} textColor={"#fff"} mode="contained">
              اضافة الحركة
            </Button>
          {/* </Link> */}
        </>
      )}
      </View>
    </View>
  );
}
