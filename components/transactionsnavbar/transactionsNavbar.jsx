import React from "react";
import { Text, View, Image, TextInput } from 'react-native';
import { styles } from "./transactionsNavbarStyle";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

export default function TransactionsNavbar(props) {
  // let {avtive} = props
  let active = "add-circle"
  let storeName = "GoldHub";
  let date = "20/12/2022"
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/navbar-img.png')} style={styles.image} />
      <TextInput
        editable
        maxLength={5}
        placeholder="بيع ..."
        // onChangeText={text => onChangeText(text)}
        style={styles.sellInput}
      />
      <TextInput
        editable
        maxLength={5}
        placeholder="شراء ..."
        // onChangeText={text => onChangeText(text)}
        style={styles.buyInput}
      />   
      <Text style={styles.date}>
        {date}
      </Text>
      <View style={styles.tabs}>
      <Ionicons name="camera" size={34} color={active === "camera" ? "#000000" : "#F5D061"} />
        <Ionicons name="person-add" size={34} color={active === "person-add" ? "#000000" : "#F5D061"} />
        <MaterialIcons name="person-search" size={34} color={active === "person-search" ? "#000000" : "#F5D061"} />
        <MaterialIcons name="adf-scanner" size={34} color={active === "adf-scanner" ? "#000000" : "#F5D061"} />
        <Ionicons name="add-circle" size={34} color={active === "add-circle" ? "#000000" : "#F5D061"} />
      </View>
    </View>
  );
}