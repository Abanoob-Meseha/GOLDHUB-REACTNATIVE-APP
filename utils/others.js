import uuid from 'react-native-uuid';

export const generateUniqueID = ()=>{
    const unique_id = uuid.v4();
    const small_id = unique_id.slice(0,5);
    return small_id;
}

export const calculateTotalTransaction = (transactions)=>{
    let total_Money = 0;
    let total_gold21 = 0;
    for (let index = 0; index < transactions.length; index++) {
      const element = transactions[index];
      total_Money = total_Money + parseFloat(element.totalCash) + parseFloat(element.gramTotalValue)
      total_gold21 = total_gold21 + (element.transactionValue * element.operator)
    }
    return({total_gold21 , total_Money});
}