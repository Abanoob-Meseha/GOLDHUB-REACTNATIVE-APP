import { useEffect , useState} from 'react';
import { StyleSheet, ScrollView, View ,Text } from 'react-native'
import { TextInput , Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import {colors} from '../../constants/theme.json'
import {client , outPrice} from '../../data/basicData.json'
import { Link } from 'expo-router';
import { saveClientOffline } from '../../utils/asyncStorage.util';
import  useStore  from '../../zustand/useStore';
import { generateUniqueID } from '../../utils/others';

export default function AddClient() {
  const [loading , setLoading]= useState(false);
  const [clientType, setClientType] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [priceType, setPriceType] = useState("");
  const [creditLimitGold , setCreditLimitGold]= useState(0);
  const [creditLimitMoney , setCreditLimitMoney]= useState(0);
  const [initialMoney , setInitialMoney]= useState(0);
  const [initialGold , setInitialGold]= useState(0);
  const setClients = useStore((state)=>state.setClients);
  const clients = useStore((state)=>state.clients);
  
  const [id, setId] = useState(generateUniqueID());
  const [index , setIndex] = useState((clients.length + 1));
  

  const clientType_dropmenu = client ;
  const outPrice_dropmenu = outPrice ; 
    
  const handleClientSave = async () => {
    setLoading(true);
    const client = {
      name,
      phone,
      address,
      priceType,
      creditLimitGold,
      creditLimitMoney,
      initialMoney,
      initialGold,
      id
    };
    setClients([...clients ,client])
    await saveClientOffline(client);
    setLoading(false);
  };
  useEffect(()=>{
    setIndex(clients.length + 1)
    setId(generateUniqueID())
  }, [clients])
  return (
      <View style={styles.screenContent}>
        <ScrollView contentContainerStyle={styles.form}>
          <View style={styles.row}>
            <TextInput
              keyboardType='phone-pad'
              mode='outlined'
              label="رقم هاتف المتعامل"
              value={phone}
              style={{width:'20%'}}
              onChangeText={phone => setPhone(phone)}
            />
            <TextInput
              mode='outlined'
              label="اسم المتعامل"
              value={name}
              style={{width:'25%'}}
              onChangeText={name => setName(name)}
            />
            <Dropdown
              labelField="label"
              valueField="value"
              placeholder="نوع المتعامل"
              data={clientType_dropmenu}
              value={clientType}
              style={styles.dropdown}
              maxHeight={300}
              placeholderStyle={styles.dropdownText}
              selectedTextStyle={styles.dropdownText}
              onChange={item => setClientType(item.value)}
            />
            <Dropdown
              labelField="label"
              valueField="value"
              placeholder="سعر الصرف"
              data={outPrice_dropmenu}
              value={priceType}
              style={styles.dropdown}
              maxHeight={300}
              placeholderStyle={styles.dropdownText}
              selectedTextStyle={styles.dropdownText}
              onChange={item => setPriceType(item.value)}
            />
            <TextInput
              keyboardType='phone-pad'
              mode='outlined'
              label="العميل رقم"
              value={index.toString()}
              textColor={colors.primary}
              disabled
              style={{width : '7%' }}
            />
            <TextInput
              keyboardType='phone-pad'
              mode='outlined'
              label="كود العميل"
              value={id.toString()}
              textColor={colors.primary}
              disabled
              style={{width : '7%' }}
            />
          </View>
          <View style={[styles.row , {justifyContent:'space-around',backgroundColor:'green',marginBottom:0,paddingVertical:5}]}>
            <TextInput
              keyboardType='phone-pad'
              mode='outlined'
              label="كاش"
              value={initialMoney}
              style={{width : '20%'}}
              right={<TextInput.Icon icon="cash-multiple" color={colors.primary} />}
              onChangeText={initialMoney => setInitialMoney(Number(initialMoney))}
            />
            <TextInput
              keyboardType='phone-pad'
              mode='outlined'
              label="دهــب"
              value={initialGold}
              style={{width : '20%'}}
              right={<TextInput.Icon icon="gold" color={colors.primary} />}
              onChangeText={initialGold => setInitialGold(Number(initialGold))}
            />
            <Text style={[styles.contentTitle , {fontSize:18}]}> الرصيد الافتتاحي</Text>
          </View>
          <View style={[styles.row , {justifyContent:'space-around',backgroundColor:colors.onError,marginBottom:0,paddingVertical:5}]}>
            <TextInput
              keyboardType='phone-pad'
              mode='outlined'
              label="كاش"
              value={creditLimitMoney}
              style={{width : '20%'}}
              right={<TextInput.Icon icon="cash-multiple" color={colors.primary} />}
              onChangeText={creditLimitMoney => setCreditLimitMoney(Number(creditLimitMoney))}
            />
            <TextInput
              keyboardType='phone-pad'
              mode='outlined'
              label="دهــب"
              value={creditLimitGold}
              style={{width : '20%'}}
              right={<TextInput.Icon icon="gold" color={colors.primary} />}
              onChangeText={creditLimitGold => setCreditLimitGold(Number(creditLimitGold))}
            />
            <Text style={[styles.contentTitle,{fontSize:22}]}> حد الائتمــــان </Text>
          </View>
          <View style={styles.row}>
            <Button icon="camera" 
            style={{width:'30%'}}
            buttonColor='red' textColor='white'
            mode="contained" 
            onPress={() => console.log('Pressed')}>
              الغاء الاضافة
            </Button>
            <Button icon="camera" 
              style={{width:'30%'}}
              buttonColor='green' textColor='white'
              mode="contained" 
              loading={loading? true : false }
              onPress={() => handleClientSave()}>
              اضافة العميل
            </Button>
          </View>
          
        </ScrollView>
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
  }
})