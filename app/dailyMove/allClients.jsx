import { useEffect , useState} from 'react';
import { StyleSheet, ScrollView, View ,Text, FlatList } from 'react-native'
import {changeOrientaionToPortrait , changeOrientationToLandscape} from '../../utils/screenOrientaion.util'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../../components/appBar/appBar';
import {colors} from '../../constants/theme.json'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AllClients() {
  const [data, setData] = useState([]);

  const getClient = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
  
      const user = {};
      result.forEach(([key, value]) => {
        if (value) {
          try {
            user[key] = JSON.parse(value);
          } catch (e) {
            console.log(`Error parsing value for key ${key}:`, e);
          }
        } else {
          user[key] = value; 
        }
      });
  
      return user;
    } catch (err) {
      console.log('Problem getting the user', err);
      return {};
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const user = await getClient();
      const userArray = Object.values(user);
      setData(userArray);
    };
    fetchData();
  }, []);

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.creditLimitGold}</Text>
    <Text style={styles.cardTitle}>{item.creditLimitMoney}</Text>
    <Text style={styles.cardTitle}>{item.phone}</Text>
    <Text style={styles.sellPrice}>{item.clientName}</Text>
    <Text style={styles.cardTitle}>{item.id}</Text>
  </View>
);

  return (
    <View style={styles.screenContent}>
        <ScrollView contentContainerStyle={styles.form}>
          <View style={styles.row}>
          </View>
        </ScrollView>
        <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.flatList}
      scrollEnabled
    />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContent:{
    flex:1,
    justifyContent:'center',
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
    backgroundColor: "#D9D9D9",
    width: "100%",
    aspectRatio: 10,
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