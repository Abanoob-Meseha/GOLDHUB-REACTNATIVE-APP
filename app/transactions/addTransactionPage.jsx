import { StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'
import AddTransaction from '../../components/addtransaction/addTransaction'
import TransactionsFooter from '../../components/transactionsfooter/transactionsFooter'

export default function dashboardLanding() {
    
  return (
    <View style={styles.container}>
            <AddTransaction />
            {/* <TransactionsFooter index = "1" /> */}
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