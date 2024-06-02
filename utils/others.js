import uuid from 'react-native-uuid';

export const generateUniqueID = ()=>{
    const unique_id = uuid.v4();
    const small_id = unique_id.slice(0,5);
    return small_id;
}