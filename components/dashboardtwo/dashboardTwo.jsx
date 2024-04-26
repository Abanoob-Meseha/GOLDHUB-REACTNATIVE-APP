import React from "react";
import { Text, View, Image } from 'react-native';
import { styles } from "../dashboardlanding/dashboardLandingStyle";
export default function dashboardTwo() {
  
  return (
    <View>
       <View style={styles.container}>
       <View style ={styles.card}>
         <Image source={require('../../../assets/images/notification.png')} style={styles.image} />
          <Text style={styles.cardTitle}>
            التنبيهات
          </Text>
        </View>
        <View style ={styles.card}>
         <Image source={require('../../../assets/images/debits.png')} style={styles.image} />
         <Text style={styles.cardTitle}>
            ديون العملاء
          </Text>
        </View>
       </View>
       <View style={styles.container}>
       <View style ={styles.card}>
         <Image source={require('../../../assets/images/timemanag.png')} style={styles.image} />
         <Text style={styles.cardTitle}>
            مواعيد استحقاق العملاء
          </Text>
        </View>
        <View style ={styles.card}>
         <Image source={require('../../../assets/images/todo.png')} style={styles.image} />
         <Text style={styles.cardTitle}>
            ToDo
          </Text>
        </View>
       </View>
    </View>
   
  );
}


