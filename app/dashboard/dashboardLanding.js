import { StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'
import DashboardLanding from '../../components/dashboardlanding/dashboardLanding'

export default function dashboardLanding() {
    
  return (
    <>
    <DashboardLanding />
    </>
  )
}

const styles = StyleSheet.create({
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