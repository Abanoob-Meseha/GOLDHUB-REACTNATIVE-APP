import React , {useState , useEffect} from 'react'
import useStore from '../../zustand/useStore'
import {colors} from "../../constants/theme.json"
import { calculateTotalTransaction } from '../../utils/others'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View ,Text, FlatList, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { deleteElementById } from '../../utils/asyncStorage.util'

export default AllMoves = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const deals = useStore((state)=>state.deals)
  const setDeals = useStore((state)=>state.setDeals);
  const [filteredDeals , setFilteredDeals] = useState([...deals])

  const handleDeleteDeal = async (dealId)=>{
    await deleteElementById('deals',dealId)
    setFilteredDeals(filteredDeals.filter((deal)=>deal.id !== dealId))
    setDeals(deals.filter((deal)=>deal.id !== dealId))
  }
  useEffect(() => {
    setFilteredDeals(deals)
  }, [deals])
  const renderItem = ({ item  , index}) => (
    <View style={styles.card}>
      <IconButton
        icon="delete"
        iconColor={colors.error}
        size={30}
        onPress={()=>handleDeleteDeal(item.id)}
      />
      <Text style={styles.cardTitle}>
        {calculateTotalTransaction(item.transactions).total_Money}
      </Text>
      <Text style={styles.cardTitle}>
        {calculateTotalTransaction(item.transactions).total_gold21}
      </Text>
      <Text style={styles.cardTitle}>
        {`${item.date.day}-${item.date.month}-${item.date.year}`}
      </Text>
      <Text style={styles.sellPrice}>
        {item.clientName}
      </Text>
      <Text style={styles.cardTitle}>
        {index}
      </Text>
      
    </View>
  );
  
  return (
    <View style={styles.screenContent}>
      <Searchbar
        placeholder="ابحث بالاسم"
        style={{width:'40%' , alignSelf:'center'}}
        value={searchQuery}
        onChangeText={(query)=>{
          setSearchQuery(query)
          if(query === ''){
            setFilteredDeals(deals)
          }else{
            let filtered = filteredDeals.filter((deal , index)=>deal.clientName.includes(query))
            setFilteredDeals([...filtered])
          }
        }}
      />
      <View style={styles.tableHeader}>
        <Icon name='delete' size={30} color={colors.secondary}/>
        <Icon name='account-cash' size={30} color={colors.secondary}/>
        <Icon name='gold' size={20} color={colors.secondary}/>
        <Icon name='calendar-clock' size={30} color={colors.secondary}/>
        <Icon name='account' size={30} color={colors.secondary}/>  
        <Icon name='qrcode-scan' size={30} color={colors.secondary}/>  
      </View>
      <FlatList
        data={filteredDeals}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled
      />
      {/* <SearchFilterModal ArrayToSearch={[...clients]}/>  */}
    </View>
  )
}


const styles = StyleSheet.create({
  screenContent:{
    flex:1,
    justifyContent:'center',
  },
  tableHeader:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    marginHorizontal:'auto',
    paddingVertical:'1%',
    paddingHorizontal:'3%',
    borderRadius:15,
    backgroundColor:colors.primary,
    alignItems:'center',
    justifyContent:'space-between'
  },
  form:{
    paddingHorizontal:'1%',
    flexWrap:'wrap',
    alignItems:'flex-start'
  },
  row:{
    width:'100%',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:'1%',
    paddingVertical:'1%'
  },
  dropdown:{
    verticalAlign:'center',
    height: 45,
    width:'15%',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius:12,
    backgroundColor:colors.background
  },
  dropdownText:{
    fontSize:15,
    color:"white",
    marginRight:'10%'
  },
  contentTitle:{
    fontSize:30,
    color: 'white',
    fontWeight:'bold'
  },
  card: {
    marginHorizontal:'auto',
    backgroundColor: colors.secondary,
    width: "100%",
    aspectRatio: 15,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    borderColor:"#000000",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 1
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
    color:'black'
  },
  sellPrice: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
    color: "#FF0404"
  },
  buyPrice: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
    color: "#10BC02"
  },
  
})