import { StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'
import AddTransaction from '../../components/addtransaction/addTransaction'
import TransactionsFooter from '../../components/transactionsfooter/transactionsFooter'

export default function AddTransactionScreen() {
    
  return (
    <View style={styles.container}>
        <AddTransaction />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height:"80%",
        backgroundColor:COLORS.darkBlue,
        alignContent: "center",
        alignItems:'center',
    },
})