import { StyleSheet, Text, View  , ScrollView} from 'react-native'
import React, { useEffect , useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useStore from '../../zustand/useStore'
import { deleteElementById, getSafesOffline } from '../../utils/asyncStorage.util'
import {colors} from "../../constants/theme.json"
import { Button, IconButton } from 'react-native-paper'
import {measures} from '../../data/basicData.json'

const SafeContent = () => {
    const [safeType , setSafeType] = useState("الوهميه")
    const setSafes = useStore((state)=>state.setSafes)
    const safes = useStore((state)=>state.safes)
    const handleDeleteSafe = async (id) =>{
        await deleteElementById("safes" , id)
        setSafes(safes.filter((safe)=>safe.id !== id))
        console.log("Safe Deleted Successfully")
    }
    useEffect(()=>{
        getSafesOffline().then((safesArray)=>{
            setSafes(safesArray)
        })
    },[])
    changeSafeType = () =>{
        if (safeType == "الوهميه") {
            setSafeType("الاصليه")
        }else{
            setSafeType("الوهميه")
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <Button style={styles.BTN} labelStyle={{fontSize:16}} textColor={colors.secondary}  mode="elevated" onPress={() => changeSafeType()}>
                اظهر الخزنه {safeType}
                </Button>
                {[...safes].map((safe, index) => {
                    let measuresWeight = {
                        "عيار 15": 0,
                        "عيار 18": 0,
                        "عيار 21": 0,
                        "عيار 22": 0,
                        "عيار 9999": 0,
                        "عيار 9999 شركات": 0,
                        "سبائك - عيارات مختلفة": 0
                    };

                    safe.safeContent.forEach((item) => {
                        measuresWeight[item.measure] += item.itemValue;
                    });

                    return (
                        <View key={index} style={{ marginBottom: 20 }}>
                            <Text style={styles.headline}>
                                محتويات {safe.id} الخاصة بك
                            </Text>
                            
                            <View style={{ height: 200 }}>
                                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
                                    {safeType == "الوهميه" ?
                                    measures.map((item, idx) => {
                                        return (
                                            <View key={idx} style={styles.row}>
                                                <Text style={{ width: '30%', fontSize: 20, textAlign: "center" }}>{`${measuresWeight[item["label"]]} جم`}</Text>
                                                <Text style={{ width: '30%', fontSize: 20, textAlign: "center" }}>{item["operator"]}</Text>
                                                <Text style={{ width: '30%', fontSize: 20, textAlign: "right" }}>{item["label"]}</Text>
                                            </View>
                                        );
                                    }) : safe.safeContent.map((item , index)=>{
                                        return(
                                            <View style={styles.row}>
                                                <Text style={{width:'25%' , fontSize:20, textAlign: "center" }}>{`الاجره/جم ${item.itemValue}`}</Text>
                                                <Text style={{width:'25%' , fontSize:20, textAlign: "center" }}>{`${item.itemValue} جم`}</Text>
                                                <Text style={{width:'25%', fontSize:20, textAlign: "center" }}>{item.itemOperator}</Text>
                                                <Text style={{width:'25%', fontSize:20}}>{item.measure}</Text>
                                            </View>
                                        )
                                    })
                                    }
                                </ScrollView>
                            </View>
                            { safeType == "الوهميه" ?  
                                <Text style={styles.headline}>
                                تحتوي علي نقود = {safe.totalMoney} L.E
                                </Text>
                             : 
                             <Text style={styles.headline}>
                             تحتوي علي نقود وأجر = {safe.totalMoney + safe.totalFee} L.E
                             </Text>
                            }
                            
                            <Text style={styles.headline}>
                                تحتوي علي دهب 21 = {safe.totalGold21} gm
                            </Text>
                            <IconButton
                                icon="delete"
                                iconColor={colors.error}
                                size={30}
                                onPress={() => handleDeleteSafe(safe.id)}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default SafeContent

const styles = StyleSheet.create({
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
      headline:{
        fontSize:20,
        textAlign:'center',
        color:'white',
        backgroundColor:colors.primary,
        paddingVertical:'1%'
      },
      BTN: {
        width:'100%',
        // height:70,
        // marginTop:'5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        fontSize: 12
      }
})