import { StyleSheet, TextInput, View } from 'react-native'
import {React , useState} from 'react'
import COLORS from '../../constants/colors';
import Icon  from 'react-native-vector-icons/FontAwesome6';

export default function input(props) {
    const [field, setField] = useState("")
    const  handleChangeField = (value) => {
        setField(value);
        console.log(value);
    }
  return (
    <View style={styles.container}>
        <Icon name={props.icon} color={COLORS.Gold}  size={44} />
      <TextInput style={styles.input} cursorColor={COLORS.Gold}
      keyboardType={props.type? props.type:'default'}
      secureTextEntry= { props.secure ? true : false}
      placeholder={props.placeholder} 
      onChangeText={(text)=>handleChangeField(text)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:COLORS.gray,
        width: "80%",
        height:60,
        borderBottomColor:COLORS.baleGold,
        marginVertical:"5%",
        paddingHorizontal:'3%',
        borderRadius:15,
        borderBottomWidth:4,
        shadowColor:'black',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        fontSize:25,
        textAlign:'right',
        paddingHorizontal:"5%",
        height:60,
        width:"85%",
        alignSelf:'flex-end',
        color:COLORS.darkBlue,
        fontWeight:'bold'
    }
})