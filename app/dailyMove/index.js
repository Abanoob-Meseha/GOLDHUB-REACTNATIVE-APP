import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import COLORS from '../../constants/colors';
import { changeOrientaionToPortrait, changeOrientationToLandscape } from '../../utils/screenOrientaion.util';
import AddTransactionScreen from './addTransactionScreen';
import AllTransactions from './allTransactions';
import AppBar from '../../components/appBar/appBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddClient from './addClient';
import AllClients from './allClients';
import useStore from '../../zustand/useStore';

export default function transactions() {
  const [reload, setReload] = useState(false)
  const appBarIndex = useStore((state)=>state.appBarIndex)
  const setAppBarIndex = useStore((state)=>state.setAppBarIndex)

  useEffect(() => {
    changeOrientationToLandscape();
    return () => changeOrientaionToPortrait();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Swiper style={styles.wrapper} loop={false} showsPagination={true} 
        index={appBarIndex} onIndexChanged={(index)=>setAppBarIndex(index)}
      >  
        <AllClients/>  
        <AddClient/>
        <AddTransactionScreen />  
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
  wrapper: {},

});
