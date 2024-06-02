import { StyleSheet, View ,Text, FlatList } from 'react-native';
import {colors} from '../../constants/theme.json'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchFilterModal from '../../components/searchFilterDrawer/searchFilterModal';
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { deleteElementById } from '../../utils/asyncStorage.util';
import { IconButton } from 'react-native-paper';
import  useStore  from '../../zustand/useStore';

export default function AllClients() {
  const [searchQuery, setSearchQuery] = useState('');
  const setClients = useStore((state)=>state.setClients);
  const clients = useStore((state)=>state.clients);
  const [filteredClients , setFilteredClients] = useState([...clients])

  const handleDeleteClient = async (clientId)=>{
    await deleteElementById('clients',clientId)
    setFilteredClients(filteredClients.filter((client)=>client.id !== clientId))
    setClients(clients.filter((client)=>client.id !== clientId))
  }
  useEffect(() => {
    setFilteredClients(clients)
  }, [clients])
  
const renderItem = ({ item  , index}) => (
  <View style={styles.card}>
    <IconButton
      icon="delete"
      iconColor={colors.error}
      size={30}
      onPress={()=>handleDeleteClient(item.id)}
    />
    <Text style={styles.cardTitle}>
      {item.initialGold}
    </Text>
    <Text style={styles.cardTitle}>
      {item.initialMoney}
    </Text>
    <Text style={styles.cardTitle}>
      {item.phone}
    </Text>
    <Text style={styles.sellPrice}>
      {item.name}
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
            setFilteredClients(clients)
          }else{
            let filtered = filteredClients.filter((client , index)=>client.name.includes(query))
            setFilteredClients([...filtered])
          }
        }}
      />
      <View style={styles.tableHeader}>
        <Icon name='delete' size={30} color={colors.secondary}/>
        <Icon name='gold' size={20} color={colors.secondary}/>
        <Icon name='account-cash' size={30} color={colors.secondary}/>
        <Icon name='phone' size={30} color={colors.secondary}/>  
        <Icon name='account' size={30} color={colors.secondary}/>  
        <Icon name='qrcode-scan' size={30} color={colors.secondary}/>
      </View>
      <FlatList
        data={filteredClients}
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