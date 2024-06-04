import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IconButton, TextInput , Button} from 'react-native-paper'
import {measures} from '../../data/basicData.json'
import {colors} from '../../constants/theme.json'
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context'
import useStore from '../../zustand/useStore'
import Navbar from "../../components/navbar/navbar"
import { getSafesOffline, saveSafeOffline } from '../../utils/asyncStorage.util'

export default index = () => {
    const [safeContent , setSafeContent] = useState([])
    const [selection , setSelection] = useState('')
    const [value , setValue] = useState(0)
    const [operator , setOperator]= useState('')
    const [totalMoney , setTotalMoney] = useState(0)
    const [totalGoldAsMoney , setTotalGoldAsMoney] = useState(0)
    const [totalGold , setTotalGold] = useState(0)
    const goldBuy = useStore((state)=>state.goldBuy);
    const goldSell = useStore((state)=>state.goldSell)
    const user = useStore((state) => state.user);
    const setSafes = useStore((state)=>state.setSafes)
    const safes = useStore((state)=>state.safes)

    const handleAdd = ()=>{
        setSafeContent([...safeContent , {"measure":selection , "itemValue":value , "itemOperator":operator}])
    }
    const handleClear= ()=>{
        setSafeContent([])
    }
    const handleTotal = ()=>{
        let total_Gold = 0
        let total_Money = totalMoney
        for (let index = 0; index < safeContent.length; index++) {
            const {itemValue , itemOperator} = safeContent[index];
            total_Gold=total_Gold + (itemValue * itemOperator)
        }
        total_Money =total_Money + (total_Gold * goldBuy)
        setTotalGold(total_Gold)
        setTotalGoldAsMoney(total_Money) 
    }
    const handleSaveSafe = async ()=>{
        let safe = {
            "id":"Safe"+ (safes.length + 1),
            "safeContent":safeContent,
            "totalMoney":totalMoney,
            "totalGold21":totalGold,
        }
        await saveSafeOffline(safe)
        setSafes([...safes , safe])
    }
    useEffect(()=>{
        getSafesOffline().then((safesArray)=>{
            setSafes(safesArray)
        })
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <Navbar imgUrl='../../assets/images/AVATAR.png' brand={user? user.brand : 'GOLDHUB'} />
      <ScrollView contentContainerStyle={{flex:1,height:'80%'}}>
      <View>
            <Text style={styles.headline}>
                اضف الذهب بعياراته المختلفة بالجرام
            </Text>
            <View style={styles.row}>
                <TextInput
                keyboardType='phone-pad'
                mode='outlined'
                label="القيمة"
                value={value}
                style={{width:'30%'}}
                onChangeText={value => setValue(value==''?'':parseFloat(value))}
                />
                <TextInput
                keyboardType='numeric'
                mode='outlined'
                label="المعامل"
                value={operator.toString()}
                textColor={colors.primary}
                style={{width : '25%' }}
                onChangeText={text => {
                    setOperator( text);
                }}                
                />
                <Dropdown
                labelField="label"
                valueField="value"
                placeholder=" العيار"
                data={measures}
                value={selection}
                style={styles.dropdown}
                maxHeight={300}
                placeholderStyle={styles.dropdownText}
                selectedTextStyle={styles.dropdownText}
                onChange={text => {
                    setSelection(text.value)
                    setOperator(text.operator)
                }}
                />
            </View>
            <ScrollView style={{width:'100%' , height:'26%'}}>
                {
                safeContent.map((item , index)=>{
                    return(
                        <View style={styles.row}>
                            <Text style={{width:'30%' , fontSize:20}}>{item.itemValue}</Text>
                            <Text style={{width:'30%', fontSize:20}}>{item.itemOperator}</Text>
                            <Text style={{width:'30%', fontSize:20}}>{item.measure}</Text>
                        </View>
                    )
                })  
                }
            </ScrollView>
            <View style={{flexDirection:'row' , alignItems:'center',justifyContent:'space-between'}}>
            <IconButton
                icon="wallet-plus"
                iconColor={colors.primary}
                size={40}
                onPress={handleAdd}
            />
            <IconButton
                icon="delete-sweep-outline"
                iconColor={colors.error}
                size={40}
                onPress={handleClear}
            />
            </View>

            <Text style={styles.headline}>
                اضف اجمالي النقود السائلة بالخزنة
            </Text>
            <View style={styles.row}>
            <TextInput
                keyboardType='phone-pad'
                mode='outlined'
                label="القيمة"
                value={totalMoney}
                style={{width:'50%'}}
                onChangeText={totalMoney => setTotalMoney(Number(totalMoney))}
                inputMode='numeric'
            />
            </View>
        </View>
        <View style= {styles.totalContainer}>
            <Text style={styles.headline}>
                اجمالي الخزنة
            </Text>
            <View style={styles.totalContent}>
                <Text style={{fontSize:16}}>دهب 21 : {totalGold} gm</Text>
                <Text style={{fontSize:16}}>نقدي : {totalMoney} L.E</Text>
            </View>
            <Text style={styles.totalAsMoney}>الاجمالي كنقود : {totalGoldAsMoney} L.E</Text>
            <Text style={styles.totalAsMoney}>الاجمالي كدهب 21 : {totalGoldAsMoney/goldBuy} gm</Text>
        </View>
            <Button icon="expand-all" mode="contained-tonal" onPress={handleTotal} textColor={'black'}>
                احسب الاجمالي
            </Button>
            <Button icon="content-save" mode="contained" onPress={handleSaveSafe} textColor={'white'}>
                حفظ بيانات الخزنة   
            </Button>
            </ScrollView>

    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        backgroundColor:'white'
    }
    ,
    row:{
        width:'100%',
        flexDirection:'row',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom:'1%',
        paddingVertical:'2%',
        paddingHorizontal:'1%',
        backgroundColor:colors.secondary,
        borderRadius:12,

      },
      dropdown:{
        verticalAlign:'center',
        height: 45,
        width:'40%',
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius:12,
        backgroundColor:colors.background
      },
      dropdownText:{
        fontSize:15,
        color:"white",
        marginRight:'10%'
      },
      headline:{
        fontSize:20,
        textAlign:'center',
        color:'white',
        backgroundColor:colors.primary,
        paddingVertical:'1%'
      },
      totalContainer:{
        backgroundColor:colors.primary,
      },
      totalContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:colors.secondary,
        borderRadius:10,
        padding:'2%'
      },
      totalAsMoney:{
        fontSize:20,
        paddingHorizontal:'2%',
        paddingVertical:'1%',
        textAlign:'center'
      }
})