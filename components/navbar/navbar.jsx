import React from "react";
import { Text, View, Image } from 'react-native';
import { styles } from "./navbarStyle";
export default function Navbar() {
  let storeName = "GoldHub";
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/navbar-img.png')} style={styles.image} />
      <Text style={styles.title}>
        {storeName}
      </Text>
      <Image source={require('../../assets/images/settings.png')} style={styles.image} />
    </View>
  );
}


