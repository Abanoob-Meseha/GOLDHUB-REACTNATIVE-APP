import { StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'
import AddTransaction from '../../components/addtransaction/addTransaction'
import TransactionsFooter from '../../components/transactionsfooter/transactionsFooter'
import Transactions from '../../components/transactions/transactions'
export default function allTransactions(props) {
    let {reload} = props
  return (
    <View style={styles.container}>
      <Transactions reload = {reload}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height:"100%",
        backgroundColor:COLORS.darkBlue,
        alignContent: "center",
        alignItems:'center',
    },
})