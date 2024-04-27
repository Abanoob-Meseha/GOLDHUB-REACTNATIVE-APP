import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../../constants/colors'
import Input from '../../components/input/input'
import Icon  from 'react-native-vector-icons/FontAwesome6';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message'

export default function register() {
    const handleSubmit = ()=>{
        Toast.show({
            type: 'success',
            text1: 'GOLDHUB TEAM',
            text2: 'Welcome To GOLDHUB👋'
          });
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}> ادخل البيانات الاتية </Text>
        <Input icon='store' placeholder=' اسم البراند الخاص بك'/>
        <Input type="phone-pad" icon='square-phone' placeholder=' رقم الهاتف الخاص بك'/>
        <Input icon='user-tie' placeholder='اســم المسـتخدم'/>
        <Input icon='user-lock' placeholder='الرقم السري للصلاحية' secure= {true} />
        
        <View style={styles.fingerprintContainer}>
            <TouchableOpacity style={styles.fingerprintBtn}>
                <Text style={styles.fingerText}> اضغط هنا لادخال البصمة </Text>
            </TouchableOpacity>
            <Ionicon name='finger-print-sharp' size={100} color={COLORS.dark}/>
            
            <TouchableOpacity style={styles.registerBtn}
                onPress={handleSubmit} >
                <Icon name='arrow-right' size={50} color={COLORS.dark}/>
            </TouchableOpacity>
        </View>
        <Toast/> 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.dark,
        alignContent: "center",
        alignItems:'center',
    },
    title:{
        color:COLORS.Gold,
        shadowColor:'black',
        fontSize:45,
        fontWeight:'bold',
        textAlign:"center",
        marginTop:'7%'
    },
    fingerprintContainer:{
        backgroundColor:COLORS.gray,
        flex:1,
        width:'100%',
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        alignItems:'center',
    },
    fingerprintBtn:{
        elevation:3,
        paddingVertical:10,
        width:'80%',
        height:76,
        backgroundColor:COLORS.dark,
        borderColor:COLORS.baleGold,
        borderWidth:4,
        shadowColor:COLORS.baleGold,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'7%'
    },
    fingerText:{
        color:'white',
        fontSize:25,
        fontWeight: 'bold',
    },
    registerBtn:{
        borderColor:COLORS.dark,
        borderWidth:2,
        marginTop:20,
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:COLORS.Gold,
        alignItems:'center',
        justifyContent:'center'
    }
})