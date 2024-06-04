import { React, useState, useEffect } from "react";
import { Text, View, FlatList, ScrollView } from 'react-native';
import { styles } from "./transactionsStyle";
import TransactionsFooter from '../transactionsfooter/transactionsFooter'
import useStore from "../../zustand/useStore";
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants/theme.json'
import { IconButton } from 'react-native-paper';
import { getArrayPropValue, getClientsOffline, saveDealOffline, updateArrayObjectProp } from "../../utils/asyncStorage.util";

export default function Transactions() {
  const setTransactions = useStore((state)=>state.setTransactions)
  const transactions = useStore((state)=>state.transactions)
  const [currentClient , setCurrentClient] = useState(null)
  const [totalGold21 , setTotalGold21] = useState()
  const [totalMoney , setTotalMoney] = useState()
  const date = useStore((state)=>state.date)
  const clients = useStore((state)=>state.clients);
  const setClients = useStore((state)=>state.setClients)
  const goldBuy = useStore((state)=>state.goldBuy)
  const move_clientId = useStore((state)=>state.move_clientId)
  const deals = useStore((state)=>state.deals)
  const setDeals = useStore((state)=>state.setDeals)

  const dayDate = new Date();
  let day = dayDate.getDate();
  let month = dayDate.getMonth() + 1;
  let year = dayDate.getFullYear();

  const handleDeleteTransaction = async (transId)=>{
    setTransactions(transactions.filter((trans)=>trans.id !== transId))
  }
  const handleSaveDeal = async ()=>{
    if (!currentClient) {
      console.log('Client not found');
      return;
    }
    const deal = {
      "id":deals.length + 1,
      "clientId":move_clientId,
      "clientName":currentClient?currentClient.name:'',
      "date":{day , month , year},
      "transactions":[...transactions]
    }
    setDeals([...deals , deal])
    await saveDealOffline(deal)
    // effect on Client Account
    let clientAccountCash = await getArrayPropValue("clients" , move_clientId , "initialMoney")
    let clientAccountgold = await getArrayPropValue("clients",move_clientId , "initialGold")
    let totalG= parseFloat(clientAccountgold) - totalGold21
    let totalC= parseFloat(clientAccountCash) - totalMoney
    await updateArrayObjectProp("clients" , move_clientId ,"initialMoney" , totalC)
    await updateArrayObjectProp("clients" , move_clientId ,"initialGold" , totalG)
    // effect on Safe
    let safeCash = await getArrayPropValue("safes" ,'Safe1' , "totalMoney")
    let safegold = await getArrayPropValue("safes" , 'Safe1',"totalGold21")
    let totalSafeG= parseFloat(safegold) + totalGold21
    let totalSafeC= parseFloat(safeCash) + totalMoney
    await updateArrayObjectProp("safes" , 'Safe1' ,"totalMoney" , totalSafeC)
    await updateArrayObjectProp("safes" , 'Safe1',"totalGold21" , totalSafeG)
    setTransactions([])
    getClientsOffline().then((clientsArray)=>{
      setClients(clientsArray)
    })
  }
  const calculateTotal = ()=>{
    let total_Money = 0;
    let total_gold21 = 0;
    for (let index = 0; index < transactions.length; index++) {
      const element = transactions[index];
      total_Money = total_Money + parseFloat(element.totalCash) + parseFloat(element.gramTotalValue)
      total_gold21 = total_gold21 + (element.transactionValue * element.operator)
    }
    setTotalGold21(total_gold21);
    setTotalMoney(total_Money)
  }
  useEffect(() => {
    calculateTotal()
  }, [transactions]);

  useEffect(() => {
    const client = clients.find(client => client.id == move_clientId);
    setCurrentClient(client);
  }, [move_clientId, clients]);

  const renderItem = ({ item }) => {
      return (
        <View style={styles.card}>
          <IconButton
            icon="delete"
            iconColor={colors.error}
            size={30}
            onPress={()=>handleDeleteTransaction(item.id)}
          />
          <Text style={styles.cardTitle}>{parseFloat(item.totalCash) + parseFloat(item.gramTotalValue)}</Text>
          <Text style={styles.cardTitle}>{item.transactionValue * item.operator}</Text>
          <Text style={styles.cardTitle}>{item.transactionValue}</Text>
          <Text style={styles.cardTitle}>{item.moveType}</Text>
          <Text style={styles.cardTitle}>{item.move}</Text>
          <Text style={styles.cardTitle}>{item.transactionNumber}</Text>
        </View>
      );
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.transactionsTitle}>
          <Text style={styles.txt}>
            كود العميل  :{move_clientId}
          </Text>
          <Text style={styles.txt}>
            اسم العميل  : {currentClient?currentClient.name:''}
          </Text>
          <Text style={styles.txt}>
            رقم الحركة  :{deals.length + 1}
          </Text>
        </View>
      <View style={styles.transactionsTitle}>
        <Icon name='delete' size={30} color={colors.secondary}/>
        <Text style={styles.txt}>النقدية</Text>
        <Text style={styles.txt}>القيمة ك 21</Text>
        <Text style={styles.txt}>قيمة المعاملة</Text>
        <Text style={styles.txt}>نوع المعاملة</Text>
        <Text style={styles.txt}>المعاملة</Text>
        <Text style={styles.txt}>رقم المعاملة</Text>

      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{height:'50%'}}
        scrollEnabled
      />
      <View style={{flexDirection:'row' , alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{backgroundColor:colors.primary ,borderRadius:12 , padding:'1%'}}>
          اجمالي الدهب كعيار 21 : gm {totalGold21}
        </Text>
        <Text style={{backgroundColor:colors.primary ,borderRadius:12 , padding:'1%'}}>
          اجمالي النقود  : L.E {totalMoney}
        </Text>
      </View>
      <View style={{flexDirection:'row' , alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{backgroundColor:colors.primary ,borderRadius:12 , padding:'1%'}}>
          اجمالي الحركة كعيار 21 : gm {totalGold21 + (totalMoney/goldBuy)}
        </Text>
        <Text style={{backgroundColor:colors.primary ,borderRadius:12 , padding:'1%'}}>
          اجمالي الحركة كنقود  : L.E {totalMoney + (totalGold21*goldBuy)}
        </Text>
        <IconButton
          mode="contained"
          icon="database-plus"
          iconColor={colors.primary}
          size={30}
          onPress={handleSaveDeal}
        />
      </View>
    </View>
  );
}