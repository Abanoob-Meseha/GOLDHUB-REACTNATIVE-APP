import { StyleSheet, View, Dimensions } from 'react-native'
import COLORS from '../../constants/colors'
import Navbar from '../../components/navbar/navbar'
import DailyPrice from '../../components/dailyprice/dailyPrice'
import AvgGramPrice from '../../components/avggramprice/avgGramPrice'
import Transactions from '../../components/transactions/transactions'

export default function register() {
  return (
    <View style={styles.container}>
        <Navbar />
        <DailyPrice />
        <View style={styles.fingerprintContainer}>
        <AvgGramPrice />
        <Transactions />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.darkBlue,
        alignContent: "center",
        alignItems:'center',
    },
    title:{
        color:COLORS.Gold,
        shadowColor:'black',
        fontSize:45,
        fontWeight:'bold',
        textAlign:"center",
        marginTop:'7%'
    },
    fingerprintContainer:{
        backgroundColor:COLORS.gray,
        flex:1,
        width:'100%',
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        alignItems:'center',
    },
    fingerprintBtn:{
        elevation:3,
        paddingVertical:10,
        width:'80%',
        height:76,
        backgroundColor:COLORS.darkBlue,
        borderColor:COLORS.baleGold,
        borderWidth:4,
        shadowColor:COLORS.baleGold,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'7%'
    },
    fingerText:{
        color:'white',
        fontSize:25,
        fontWeight: 'bold',
    },
    registerBtn:{
        borderColor:COLORS.darkBlue,
        borderWidth:2,
        marginTop:20,
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:COLORS.Gold,
        alignItems:'center',
        justifyContent:'center'
    }
})