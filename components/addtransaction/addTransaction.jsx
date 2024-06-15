import React, { useEffect, useState } from "react";
import { View , Text, ScrollView} from "react-native";
import { styles } from "./addTransactionStyle";
import { Dropdown } from 'react-native-element-dropdown';
import { moveTypes , measures} from '../../data/basicData.json'
import TransactionsFooter from '../transactionsfooter/transactionsFooter'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput , Button, IconButton } from 'react-native-paper';
import {colors} from '../../constants/theme.json'
import useStore from "../../zustand/useStore";

export default function addTransaction() {
  const [safe , setSafe ] = useState('');
  const [clientName , setClientName ] = useState('');
  const [moveType , setMoveType ] = useState('');
  const [move , setMove ] = useState('');
  const [transactionValue , setTransactionValue ] = useState(0);
  const [operator , setOperator ] = useState(0);
  const [valueAsGold , setValueAsGold ] = useState(0);
  const [gramValue , setGramValue ] = useState(0);
  const [gram21Value , setGram21Value ] = useState(0);
  const [gramTotalValue , setGramTotalValue] = useState(0)
  const [transValueAsGold , setTransValueAsGold] = useState(0)
  const [priceAsGold , setPriceAsGold ] = useState(0);
  const [totalCash , setTotalCash ] = useState(0);
  const [clientsDropdown , setClientsDropdown] = useState([])
  const clients = useStore((state)=>state.clients);
  const deals = useStore((state)=>state.deals);
  const safes = useStore((state)=>state.safes)
  const [dealNum , setDealNum]= useState(deals.length+1)
  const transactions = useStore((state)=>state.transactions)
  const [transactionNumber , setTransactionNumber ] = useState(transactions.length + 1);
  const goldBuy = useStore((state)=>state.goldBuy)
  const setTransactions = useStore((state)=>state.setTransactions)
  const setMove_clientId = useStore((state)=>state.setMove_clientId)
  const [safesData , setSafesData ] = useState([])
  const [clientsData , setClientsData ] = useState([])
const handleTransactionSave = () => {
  const transaction = {
    id:transactionNumber,
    safe,
    moveType,
    move,
    transactionValue,
    operator,
    totalCash,
    gramTotalValue,
  };
  setTransactions([...transactions , transaction])
};
  useEffect(()=>{
    setClientsData(clients.map((client ,index)=>{
      return({"label":client.name , "value":client.name , "clientId":client.id})
    }))
    setSafesData(safes.map((safe ,index)=>{
      return({"label":safe.id , "value":safe.id})
    }))
    setClientsDropdown(clientsData)
    setDealNum(deals.length + 1)
    setTransactionNumber(transactions.length +1)
  },[clients , deals , transactions ,safes])
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[{width:"20%"}, styles.field]}>
          <Dropdown
          labelField="label"
          valueField="value"
          data={safesData}
          value={safe}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={item => setSafe(item.value)}
          placeholder={'الخزنه - كود الخزنه'}
          />
        </View>
        <View style={[{width:"40%"}, styles.field]}>
          <Dropdown
          search
          searchPlaceholder= "ابحث بالاسم"
          labelField="label"
          valueField="value"
          data={clientsDropdown}
          value={clientName}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={(item) => {
            setClientName(item.value)
            setMove_clientId(item.clientId)
          }
        }
          placeholder={'العميل - كود العميل'}
        />
        </View>
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="رقم الحركة"
          value={dealNum.toString()}
          textColor={colors.primary}
          disabled
          style={{width : '15%' }}
        />
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="المعاملة رقم "
          value={transactionNumber.toString()}
          textColor={colors.primary}
          disabled
          style={{width : '15%' }}
        />
      </View>
      <View style={styles.row}>           
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="قيمة الحركة"
          value={transactionValue}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={transactionValue => setTransactionValue(transactionValue)}
        />
        <TextInput
          keyboardType='numeric'
          mode='outlined'
          label="المعامل"
          value={operator.toString()}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={operator => setOperator(operator)}
        />
        <View style={[{width:"20%"}, styles.field]}>
          <Dropdown
          labelField="label"
          valueField="value"
          data={measures}
          value={moveType}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={item => {
            setMoveType(item.value)
            setOperator(item.operator)
          }}
          placeholder={'نوع المعاملة'}
          />
        </View>
        <View style={[{width:"20%"}, styles.field]}>
          <Dropdown
          labelField="label"
          valueField="value"
          data={moveTypes}
          value={move}
          style={styles.dropdown}
          maxHeight={300}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          onChange={item => setMove(item.value)}
          placeholder={'المعاملة'}
        />
        </View>
      </View>
      <View style={styles.row}>
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="قيمة المعاملة دهب 21"
          value={(transactionValue * operator).toString()}
          textColor={colors.primary}
          style={{width : '30%' }}
          onChangeText={transValueAsGold => setTransValueAsGold(transValueAsGold)}
        />
        <TextInput
          keyboardType='numeric'
          mode='outlined'
          label="اجرة الجرام"
          value={gramValue.toString()}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={gramValue => {
            setGramValue(gramValue)
            setGramTotalValue(gramValue * transactionValue)
          }
        }
        />
        <TextInput
          keyboardType='numeric'
          mode='outlined'
          label="اجرة الجرام كدهب 21"
          value={gram21Value.toString()}
          textColor={colors.primary}
          style={{width : '25%' }}
          onChangeText={gram21Value => {
            setGram21Value(gram21Value)
            setGramTotalValue(gram21Value * transactionValue * operator)
          }
          }
        />
        <TextInput
          keyboardType='numeric'
          mode='outlined'
          label=" اجمالي الاجرة"
          value={gramTotalValue.toString()}
          textColor={colors.primary}
          style={{width : '20%' }}
          onChangeText={gramTotalValue => setGramTotalValue(gramTotalValue)}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          keyboardType='phone-pad'
          mode='outlined'
          label="النقدية"
          value={totalCash}
          textColor={colors.primary}
          style={{width : '30%' }}
          onChangeText={totalCash => setTotalCash(totalCash)}
        />
        <Text style={{backgroundColor:colors.primary ,borderRadius:12 , padding:'1%'}}>
          الاجمالي كدهب 21 : gm {((parseFloat(totalCash) + parseFloat(gramTotalValue))/goldBuy + (transactionValue*operator)).toFixed(3)}
        </Text>
        <Text style={{backgroundColor:colors.primary ,borderRadius:12 , padding:'1%'}}>
          الاجمالي كنقود  : L.E {(parseFloat(totalCash) + parseFloat(gramTotalValue) + (transactionValue*operator*goldBuy)).toFixed(3)}
        </Text>
        <IconButton
          mode="contained"
          icon="plus"
          iconColor={colors.primary}
          size={40}
          onPress={handleTransactionSave}
        />
      </View>
      <View>
      </View>
    </View>
  );
}
