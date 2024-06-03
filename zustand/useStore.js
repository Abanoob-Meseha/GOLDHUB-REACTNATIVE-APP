import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '../firebase.config'

const useStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),

    date: null,
    setDate: (data) => set({ data }),

    goldBuy:0,
    goldSell:0,
    setGoldBuy: (goldBuy) => set({ goldBuy }),
    setGoldSell: (goldSell) => set({ goldSell }),
    dollarBuy : 0,
    dollarSell : 0,
    setDollarBuy: (dollarBuy) => set({ dollarBuy }),
    setDollarSell: (dollarSell) => set({ dollarSell }),
    ounceSell: 0,
    setOunceSell: (ounceSell) => set({ ounceSell }),

    appBarIndex: 2,
    setAppBarIndex: (index) => set({ appBarIndex: index }),

    clients : [],
    setClients: (dataArray) => set({clients:[...dataArray]}),

    deals: [],
    setDeals:(dataArray) => set({deals:[...dataArray]}),

    safes:[],
    setSafes: (dataArray) => set({safes:[...dataArray]}),

    transactions:[],
    setTransactions: (dataArray) => set({transactions:[...dataArray]}),

    move_clientId:'',
    setMove_clientId: (move_clientId) => set({move_clientId}),
  }));

export default useStore;