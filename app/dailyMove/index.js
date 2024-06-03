import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import COLORS from '../../constants/colors';
import { changeOrientaionToPortrait, changeOrientationToLandscape } from '../../utils/screenOrientaion.util';
import AddTransactionScreen from './addTransactionScreen';
import BillTransactions from './billTransactions';
import AllMoves from './allMoves';
import AddClient from './addClient';
import AllClients from './allClients';
import AppBar from '../../components/appBar/appBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getClientsOffline, getDealsOffline, getSafesOffline } from '../../utils/asyncStorage.util';
import  useStore  from '../../zustand/useStore';

export default function DailyMove() {
  const appBarIndex = useStore((state)=>state.appBarIndex)
  const setAppBarIndex = useStore((state)=>state.setAppBarIndex)
  const clients = useStore((state)=>state.clients);
  const setClients = useStore((state)=>state.setClients);
  const setDeals = useStore((state)=>state.setDeals)
  const setSafes = useStore((state)=>state.setSafes)
  
  useEffect(() => {
    changeOrientationToLandscape();
    getClientsOffline().then((clientsArray)=>{
      setClients(clientsArray)
    })
    getDealsOffline().then((dealsArray)=>{
      setDeals(dealsArray)
    })
    getSafesOffline().then((safesArray)=>{
      setSafes(safesArray)
    })
    return () => changeOrientaionToPortrait();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Swiper style={styles.wrapper} loop={false} showsPagination={true} 
        index={appBarIndex} onIndexChanged={(index)=>setAppBarIndex(index)}>  
        <AllClients />  
        <AddClient />
        <AddTransactionScreen/>  
        <BillTransactions/>
        <AllMoves/>
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
