import React from "react";
import { Text, View, Image } from 'react-native';
import { styles } from "./dashboardLandingStyle";
export default function dashboardLanding() {
  
  return (
    <View>
       <View style={styles.container}>
       <View style ={styles.card}>
         <Image source={require('../../../assets/images/inventory.png')} style={styles.image} />
          <Text style={styles.cardTitle}>
            الجرد
          </Text>
        </View>
        <View style ={styles.card}>
         <Image source={require('../../../assets/images/moneyflow.png')} style={styles.image} />
         <Text style={styles.cardTitle}>
            الحركه الماليه
          </Text>
        </View>
       </View>
       <View style={styles.container}>
       <View style ={styles.card}>
         <Image source={require('../../../assets/images/code-data.png')} style={styles.image} />
         <Text style={styles.cardTitle}>
            الاكواد والبيانات الاساسيه
          </Text>
        </View>
        <View style ={styles.card}>
         <Image source={require('../../../assets/images/reports.png')} style={styles.image} />
         <Text style={styles.cardTitle}>
            التقارير
          </Text>
        </View>
       </View>
    </View>
   
  );
}


