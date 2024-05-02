import { useEffect , useState} from 'react';
import { StyleSheet, ScrollView, View ,Text } from 'react-native'
import {changeOrientaionToPortrait , changeOrientationToLandscape} from '../../utils/screenOrientaion.util'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../../components/appBar/appBar';
import { TextInput , Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import {colors} from '../../constants/theme.json'
export default function index() {
  
  useEffect(() => {
    changeOrientationToLandscape()
    return(()=>changeOrientaionToPortrait() )   
  }, []);
  const [loading , setLoading]= useState(false);
  const [id, setId] = useState('100');
  const [clientType, setClientType] = useState(null);
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [priceType, setPriceType] = useState("");
  const [creditLimitGold , setCreditLimitGold]= useState("");
  const [creditLimitMoney , setCreditLimitMoney]= useState("");
  const [initialMoney , setInitialMoney]= useState("");
  const [initialGold , setInitialGold]= useState("");

  const dropmenuData = [
    { label: 'مورد', value: 'مورد' },
    { label: 'عميل', value: 'عميل' },
    { label: 'مسوئجي', value: 'مسوئجي' },
    { label: 'جرد', value: 'جرد' },
    { label: 'حسابات', value: 'حسابات' },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <AppBar/>
      <View style={styles.screenContent}>
        <ScrollView contentContainerStyle={styles.form}>
          <View style={styles.row}>
            <TextInput
              mode='outlined'
              label="رقم هاتف المتعامل"
              value={phone}
              style={{width:'20%'}}
              onChangeText={clientName => setClientName(clientName)}
            />
            <TextInput
              mode='outlined'
              label="اسم المتعامل"
              value={clientName}
              style={{width:'30%'}}
              onChangeText={clientName => setClientName(clientName)}
            />
            <Dropdown
              labelField="label"
              valueField="value"
              placeholder="نوع المتعامل"
              data={dropmenuData}
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
              data={dropmenuData}
              value={priceType}
              style={styles.dropdown}
              maxHeight={300}
              placeholderStyle={styles.dropdownText}
              selectedTextStyle={styles.dropdownText}
              onChange={item => setPriceType(item.value)}
            />
            <TextInput
              mode='outlined'
              label="ID"
              value={id}
              style={{width : '10%'}}
            />
          </View>
          <View style={[styles.row , {justifyContent:'space-around',backgroundColor:'green',marginBottom:0,paddingVertical:5}]}>
            <TextInput
              mode='outlined'
              label="كاش"
              value={initialMoney}
              style={{width : '20%'}}
              right={<TextInput.Icon icon="cash-multiple" color={colors.primary} />}
            />
            <TextInput
              mode='outlined'
              label="دهــب"
              value={initialGold}
              style={{width : '20%'}}
              right={<TextInput.Icon icon="gold" color={colors.primary} />}
            />
            <Text style={[styles.contentTitle , {fontSize:21}]}> الرصيد الافتتاحي</Text>
          </View>
          <View style={[styles.row , {justifyContent:'space-around',backgroundColor:colors.onError,marginBottom:0,paddingVertical:5}]}>
            <TextInput
              mode='outlined'
              label="كاش"
              value={creditLimitMoney}
              style={{width : '20%'}}
              right={<TextInput.Icon icon="cash-multiple" color={colors.primary} />}
            />
            <TextInput
              mode='outlined'
              label="دهــب"
              value={creditLimitGold}
              style={{width : '20%'}}
              right={<TextInput.Icon icon="gold" color={colors.primary} />}
            />
            <Text style={styles.contentTitle}> حد الائتمان </Text>
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
            onPress={() => setLoading(true)}>
              اضافة العميل
            </Button>
          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1
  },
  screenContent:{
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