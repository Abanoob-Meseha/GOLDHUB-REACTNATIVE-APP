import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from "./dashboardLandingStyle";
import { Link, router } from "expo-router";
export default function dashboardLanding() {
  
  return (
    <View>
       <View style={styles.container}>
        <TouchableOpacity style ={styles.card} onPress={()=>{router.navigate('/safeContent')}}>
          <Image source={require('../../assets/images/inventory.png')} style={styles.image} />
            <Text style={styles.cardTitle}>
              محتويات الخزنة  
            </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style ={styles.card} onPress={()=>{router.navigate('/dailyMove')}}>
          <Image source={require('../../assets/images/moneyflow.png')} style={styles.image} />
          <Text style={styles.cardTitle}>
              الحركة اليومية
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
       <TouchableOpacity style ={styles.card}>
         <Image source={require('../../assets/images/code-data.png')} style={styles.image} />
         <Text style={styles.cardTitle}>
            الاكواد والبيانات الاساسيه
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.card} onPress={()=>{router.navigate('/safe')}}>
         <Image source={require('../../assets/images/reports.png')} style={styles.image} />
         <Text style={styles.cardTitle}>
            ادخال الخزنة
          </Text>
        </TouchableOpacity>
      </View>
    </View>
   
  );
}


