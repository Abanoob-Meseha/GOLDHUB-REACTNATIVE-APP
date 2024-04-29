import AsyncStorage from '@react-native-async-storage/async-storage';


const saveUser = ( userId,user)=>{
    AsyncStorage.setItem( userId, JSON.stringify(user) ).then((user)=>{
        console.log("Saved user" , user);
    }).catch((err)=>{
        console.log('problem saving the user' , err)
    })
}
const getUser = (userId)=>{
    AsyncStorage.getItem(userId).then((user)=>{
        console.log("user Retrieved sucessfully" , user);
    }).catch((err)=>{
        console.log('problem getting the user' , err)
    })
}

module.exports = {getUser , saveUser}

