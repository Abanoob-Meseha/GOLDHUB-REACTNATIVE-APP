import React from "react";
import { Text, View, Image } from 'react-native';
import { styles } from "./navbarStyle";
import { Avatar } from "react-native-paper";
import { Link } from "expo-router";

export default function Navbar({imgUrl , brand}) {
  
  return (
    <View style={styles.container}>
      <Link href={'/dashboard'} asChild>
        <Avatar.Image size={55} source={require('../../assets/images/AVATAR.png')} />      
      </Link>      
      <Text style={styles.title}>
        {brand}
      </Text>
      <Image source={require('../../assets/images/settings.png')} style={styles.image} />
    </View>
  );
}


