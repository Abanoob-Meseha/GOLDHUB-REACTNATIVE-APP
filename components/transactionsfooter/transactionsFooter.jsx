import React from "react";
import { View } from 'react-native';
import { styles } from "./transactionsFooterStyle";
import { Ionicons } from '@expo/vector-icons'; 
import { Button, TextInput } from 'react-native-paper';
import { Link } from 'expo-router';

export default function TransactionsFooter(props) {
  let  index  = props.index;

  return (
    <View style={styles.container}>
      {index == "1" ? (
        <>
          <Ionicons name="document-text-outline" size={50} color={"#F5D061"} />
          <Link href={'/'} asChild>
            <Button style={styles.deleteTransactionBtn} labelStyle={{ fontSize: 22 }} textColor={"#fff"} mode="contained">
              الغاء المعامله 
            </Button>
          </Link>
          <Link href={'/'} asChild>
            <Button style={styles.addTransactionBtn} labelStyle={styles.label} textColor={"#fff"} mode="contained">
              اضافة معامله 
            </Button>
          </Link>
        </>
      ) : (
        <>
          <TextInput style={styles.input} >
            600000
          </TextInput>
          <TextInput style={styles.input}>
            600000
          </TextInput>
          <Link href={'/'} asChild>
            <Button style={styles.addTransactionBtn} labelStyle={styles.label} textColor={"#fff"} mode="contained">
              اضافة الحركة
            </Button>
          </Link>
        </>
      )}
    </View>
  );
}
