import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./addTransactionStyle";
import DropDownPicker from 'react-native-dropdown-picker';

export default function addTransaction(props) {
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
  ]);
  
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[{width:"30%"}, styles.field]}>
          <DropDownPicker
          open={open1}
          value={value1}
          items={items1}
          setOpen={setOpen1}
          setValue={setValue1}
          setItems={setItems1}
          placeholder={'الخزنه - كود الخزنه'}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownMenu}
          />
        </View>
        <View style={[{width:"40%"}, styles.field]}>
          <DropDownPicker
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          placeholder={'العميل - كود العميل'}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownMenu}
        />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          // onChangeText={text => onChangeText(text)}
          style={styles.goldenInput}و
          placeholder="رقم الحركه النسبى"
        />
        </View>
      </View>
      <View style={styles.row}>
      <View style={[{width:"20%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          // onChangeText={text => onChangeText(text)}
          style={styles.goldenInput}
          placeholder="المعامل"
        />
        </View>
        <View style={[{width:"30%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          // onChangeText={text => onChangeText(text)}
          style={styles.normalInput}
          placeholder="قيمة الحركه"
        />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
          <DropDownPicker
          open={open4}
          value={value4}
          items={items4}
          setOpen={setOpen4}
          setValue={setValue4}
          setItems={setItems4}
          placeholder={'نوع الحركه'}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownMenu}
          />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
          <DropDownPicker
          open={open3}
          value={value3}
          items={items3}
          setOpen={setOpen3}
          setValue={setValue3}
          setItems={setItems3}
          placeholder={'الحركه'}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownMenu}
        />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[{ width: "30%" }, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          // onChangeText={text => onChangeText(text)}
          style={styles.goldenInput}
          placeholder="اجمالى النقديه"
        />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          // onChangeText={text => onChangeText(text)}
          style={styles.goldenInput}
          placeholder=" الاجره كذهب 21"

        />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          // onChangeText={text => onChangeText(text)}
          style={styles.normalInput}
          placeholder="اجرة الجرام ..."
        />
        </View>
        <View style={[{width:"25%"}, styles.field]}>
           <TextInput
          editable
          maxLength={5}
          // onChangeText={text => onChangeText(text)}
          style={styles.goldenInput}
          placeholder="القيمه كذهب 21"
        />
        </View>
      </View>
    </View>
  );
}
