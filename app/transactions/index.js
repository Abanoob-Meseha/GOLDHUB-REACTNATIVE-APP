import { StyleSheet, View} from 'react-native'
import { useEffect } from 'react';
import Swiper from 'react-native-swiper';
import COLORS from '../../constants/colors'
import {changeOrientaionToPortrait , changeOrientationToLandscape} from '../../utils/screenOrientaion.util'
import TransactionsNavbar from '../../components/transactionsnavbar/transactionsNavbar'
import AddTransaction from './addTransactionPage'
import AllTransactions from './allTransactions'
import AppBar from '../../components/appBar/appBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function transactions() {
  useEffect(() => {
    changeOrientationToLandscape()
    return(()=>changeOrientaionToPortrait() )   
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <AppBar/>
      <View>
        {/* <TransactionsNavbar /> */}
        <Swiper loop={false} showsPagination={true} index={0}>
          <AddTransaction />
          <AllTransactions />
        </Swiper>
      </View>

    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.darkBlue,
        alignContent: "center",
        alignItems:'center',
    },
})