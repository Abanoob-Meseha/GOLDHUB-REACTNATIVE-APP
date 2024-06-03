import { StyleSheet, Text, View  , ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useStore from '../../zustand/useStore'
import { deleteElementById, getSafesOffline } from '../../utils/asyncStorage.util'
import {colors} from "../../constants/theme.json"
import { IconButton } from 'react-native-paper'
const SafeContent = () => {
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
  return (
    <SafeAreaView>
        <ScrollView>
            {
                [...safes].map((safe , index)=>{
                    return(
                        <>
                    <Text style={styles.headline}>
                            محتويات {safe.id} الخاصة بك
                        </Text>
                        <ScrollView style={{width:'100%' , height:'26%'}}>
                                {
                                safe.safeContent.map((item , index)=>{
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
                            <Text style={styles.headline}>
                                تحتوي علي نقود = {safe.totalMoney} L.E
                            </Text>
                            <IconButton
                                icon="delete"
                                iconColor={colors.error}
                                size={30}
                                onPress={()=>handleDeleteSafe(safe.id)}
                            />
                            </>

                    )
                })
            }
        </ScrollView>
      
    </SafeAreaView>
  )
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
})