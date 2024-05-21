import {colors} from "../../constants/theme.json"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    appBar:{
        backgroundColor:colors.background,
        paddingHorizontal:'1%',
        paddingVertical:'1%',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        width: "100%"
      },
      sell_BuyContainer:{
       flexDirection:'row', 
       width:'30%',
       alignItems:'center',
       justifyContent:'space-between'
      },
      input:{
        width:"50%",
        fontSize:20
      },
      dateText:{
        fontWeight:'bold',
        fontSize:20,
        color:colors.background,
        backgroundColor:colors.primary,
        padding:'1%',
        borderRadius:15,
        textAlignVertical:'center',
        textAlign:'center',
        width: "20%"
      },
      actionBar:{
        flexDirection:'row',
        backgroundColor:colors.secondary,
        borderRadius:15,
        paddingHorizontal:'2%',
        paddingVertical:'1%',
        alignItems:'center',
        width:'40%',
        justifyContent:'space-between'
      }
})