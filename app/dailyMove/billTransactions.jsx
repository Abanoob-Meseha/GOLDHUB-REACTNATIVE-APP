import { StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'
import Transactions from '../../components/transactions/transactions'

export default function BillTransactions() {
  return (
    <View style={styles.container}>
      <Transactions />
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