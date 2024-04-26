import React from "react";
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { styles } from "./avgGramPrice";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function avgGramPrice() {
  let storeName = "GoldHub";
  
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>
                متوسط سعر الجرام خلال اخر جرد
            </Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputTitle}>
                        شراء
                    </Text>
                    <TextInput
                        editable
                        maxLength={5}
                        // onChangeText={text => onChangeText(text)}
                        style={styles.buyInput}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputTitle}>
                        بيع
                    </Text>
                    <TextInput
                        editable
                        maxLength={5}
                        // onChangeText={text => onChangeText(text)}
                        style={styles.sellInput}
                    />
                </View>
            </View>
            
        </View>
    </View>
  );
}


