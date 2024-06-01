import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import COLORS from '../../constants/colors';
import { changeOrientaionToPortrait, changeOrientationToLandscape } from '../../utils/screenOrientaion.util';
import TransactionsNavbar from '../../components/transactionsnavbar/transactionsNavbar';
import AddTransaction from './addTransactionPage';
import AllTransactions from './allTransactions';
import AppBar from '../../components/appBar/appBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function transactions() {
  const [reload, setReload] = useState(false)
  useEffect(() => {
    changeOrientationToLandscape();
    return () => changeOrientaionToPortrait();
  }, []);
  const handleIndexChanged = (index) => {
    setReload(!reload);
    console.log("Current value of 'reload':", reload);
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      {/* <TransactionsNavbar /> */}
      <Swiper loop={false} showsPagination={true} index={0} onIndexChanged={handleIndexChanged}>  
        <AddTransaction />  
        <AllTransactions reload = {reload}/>  
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
