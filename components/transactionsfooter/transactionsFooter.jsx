import React from "react";
import { View} from 'react-native';
import { styles } from "./transactionsFooterStyle";
import { Ionicons} from '@expo/vector-icons'; 
import {  Button } from 'react-native-paper';
import { Link } from 'expo-router';


export default function TransactionsFooter(props) {
  return (
    <View style={styles.container}>
        <Ionicons name="document-text-outline" size={50} color={"#F5D061"} />
      <Link href={'/'} asChild>
        <Button style={styles.deleteTransactionBtn} labelStyle={{fontSize:22 }} textColor={"#fff"}  mode="contained" 
         >
          الغاء المعامله 
        </Button>
      </Link>
      <Link href={'/'} asChild>
        <Button style={styles.addTransactionBtn} labelStyle={{fontSize:22 }} textColor={"#fff"}  mode="contained" 
         >
          اضافة معامله 
        </Button>
      </Link>
    </View>
  );
}
