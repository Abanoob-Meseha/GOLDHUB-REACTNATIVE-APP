import AsyncStorage from '@react-native-async-storage/async-storage';

const saveUser = ( userId , user)=>{
    AsyncStorage.setItem( userId, JSON.stringify(user) ).then(()=>{
        console.log("Saved user" , user);
    }).catch((err)=>{
        console.log('problem saving the user' , err)
    })
}
const getUser = (userId)=>{
    AsyncStorage.getItem(userId).then((user)=>{
        console.log("user Retrieved sucessfully" , user)
        return user?JSON.parse(user):null;
    }).catch((err)=>{
        console.log('problem getting the user' , err)
    })
}
const signOutUser = (userId)=>{
    AsyncStorage.getItem(userId).then((user)=>{
        if (user){
            let userObject = JSON.parse(user);
            userObject['token'] = "";
            console.log("user Signed out Successfully")
        }
    }).catch((err)=>{
        console.error('Problem in SignoutUser' , err)
    })
}

module.exports = {getUser , saveUser , signOutUser}

