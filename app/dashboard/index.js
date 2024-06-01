import { StyleSheet, View} from 'react-native'
import Swiper from 'react-native-swiper';
import COLORS from '../../constants/colors'
import {colors} from "../../constants/theme.json"
import Navbar from '../../components/navbar/navbar'
import DailyPrice from '../../components/dailyprice/dailyPrice'
import DashboardLanding from './dashboardLanding'
import DashboardTwo from './dashboardTwo'
import DashboardTransactions from './dashboardTransactions'
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButtonHandler from '../../utils/backHandler'; // Import the BackButtonHandler component
import { getUserOffline } from '../../utils/asyncStorage.util';
import useStore from '../../zustand/useStore';
import { useEffect } from 'react';

export default function dashboard() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    getUserOffline().then((userData)=>{
      setUser(userData)
    })
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <BackButtonHandler />
      <Navbar imgUrl='../../assets/images/AVATAR.png' brand={user? user.brand : 'GOLDHUB'} />
      <DailyPrice />
      <View style={styles.fingerprintContainer}>
        <Swiper showsPagination={true} index={1}>
          <DashboardTwo />
          <DashboardLanding />
          <DashboardTransactions />
        </Swiper>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
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
      paddingTop:20,
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