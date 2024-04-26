import React from "react";
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { styles } from "./dailyPriceStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function dailyPrice() {
  let storeName = "GoldHub";
  
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>
                سعر الدولار
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
        <View style={styles.box}>
        <Text style={styles.title}>
                سعر الدولار
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
            <View style={{
                width:"50%",
                alignItems:"center"
            }}>
                    <Text style={styles.inputTitle}>
                        سعر الوقيه
                    </Text>
                    <TextInput
                        editable
                        maxLength={5}
                        // onChangeText={text => onChangeText(text)}
                        style={styles.borderLessInput}
                    />
            </View>
        </View>
    </View>
  );
}


