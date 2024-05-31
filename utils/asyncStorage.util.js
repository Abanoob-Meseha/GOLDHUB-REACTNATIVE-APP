import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';
// save user email and password offline
const saveUserCredentialsOffline = async (email, password) => {
  try {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const userData = { email, password: hashedPassword };

    await AsyncStorage.setItem('userCredentials', JSON.stringify(userData));
    console.log("Offline Saved user credentials", userData);
  } catch (err) {
    console.log('Problem saving the user credentials', err);
  }
}
// verify the user to login offline
export const verifyUserOffline = async (email, password) => {
    try {
      const storedCredentials = await AsyncStorage.getItem('userCredentials');
  
      if (storedCredentials) {
        const { email: storedEmail, password: storedHashedPassword } = JSON.parse(storedCredentials);
        const hashedPassword = CryptoJS.SHA256(password).toString();
        if (email === storedEmail && hashedPassword === storedHashedPassword) {
          console.log('User verified offline');
          return true;
        }
      }
      console.log('Invalid credentials');
      return false;
    } catch (err) {
      console.log('Problem verifying the user', err);
      return false;
    }
}
//-------------------------------------------------------------------
export const saveUserOffline = ( userId , user)=>{
    AsyncStorage.setItem( userId, JSON.stringify(user) ).then(()=>{
        console.log("Offline Saved user" , user);
    }).then(()=>{
        saveUserCredentialsOffline(`${user.brand}@gmail.com` , user.password)
    }).catch((err)=>{
        console.log('problem saving the user' , err)
    })
}
export const getUserOffline = (userId)=>{
    AsyncStorage.getItem(userId).then((user)=>{
        console.log("user Retrieved sucessfully" , user)
        return user?JSON.parse(user):null;
    }).catch((err)=>{
        console.log('problem getting the user' , err)
    })
}
export const signOutUserOffline = (userId)=>{
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

export const getUsersOffline = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      const user = {};
      result.forEach(([key, value]) => {
        if (value) {
          try {
            user[key] = JSON.parse(value);
          } catch (e) {
            console.log(`Error parsing value for key ${key}:`, e);
          }
        } else {
          user[key] = value;
        }
      });
      return user;
    } catch (err) {
      console.log('Problem getting the user', err);
      return {};
    }
  };
