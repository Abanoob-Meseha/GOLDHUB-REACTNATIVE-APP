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
    AsyncStorage.setItem( "user", JSON.stringify({...user , id:userId}) ).then(()=>{
        console.log("Offline Saved user" , {...user , id:userId});
    }).then(()=>{
        saveUserCredentialsOffline(`${user.brand}@gmail.com` , user.password)
    }).catch((err)=>{
        console.log('problem saving the user' , err)
    })
}
export const getUserOffline = async ()=>{
  try {
    let user = await AsyncStorage.getItem("user")
    console.log("user Retrieved sucessfully" , user)
    return user?JSON.parse(user):null;
  } catch (error) {
    console.log('problem getting the user' , err)

  }
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

  // ----------------------------Update or Add Proprety Of any Async key
export const updateProperty = async (key, property, value) => {
    try {
      // Step 1: Retrieve the object from AsyncStorage
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null) {
        // Step 2: Parse the object from JSON
        let obj = JSON.parse(jsonValue);
  
        // Step 3: Update the specific property
        obj[property] = value;
  
        // Step 4: Convert the updated object back to a JSON string
        const updatedJsonValue = JSON.stringify(obj);
  
        // Step 5: Save the updated object back to AsyncStorage
        await AsyncStorage.setItem(key, updatedJsonValue);
  
        console.log('Property updated successfully');
      } else {
        console.log('Object not found');
      }
    } catch (e) {
      console.error('Failed to update property', e);
    }
};

export const pushToArray = async (key, newItem) => {
  try {
    // Step 1: Retrieve the array from AsyncStorage
    const jsonValue = await AsyncStorage.getItem(key);
    let array = [];

    if (jsonValue !== null) {
      // Step 2: Parse the array from JSON
      array = JSON.parse(jsonValue);
    }

    // Step 3: Add the new item to the array
    array.push(newItem);

    // Step 4: Convert the updated array back to a JSON string
    const updatedJsonValue = JSON.stringify(array);

    // Step 5: Save the updated array back to AsyncStorage
    await AsyncStorage.setItem(key, updatedJsonValue);

    console.log('Item added to array successfully');
  } catch (e) {
    console.error('Failed to add item to array', e);
  }
};

export const deleteElementById = async (key, idToDelete) => {
  try {
    // Step 1: Retrieve the array from AsyncStorage
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      // Step 2: Parse the array from JSON
      let array = JSON.parse(jsonValue);

      // Step 3: Filter the array to remove the element(s) with the matching id
      array = array.filter(item => item.id !== idToDelete);

      // Step 4: Convert the updated array back to a JSON string
      const updatedJsonValue = JSON.stringify(array);

      // Step 5: Save the updated array back to AsyncStorage
      await AsyncStorage.setItem(key, updatedJsonValue);

      console.log('Element deleted successfully');
    } else {
      console.log('Array not found');
    }
  } catch (e) {
    console.error('Failed to delete element', e);
  }
};

// ------------------------------Client Functions
export const saveClientOffline = async (client) => {
  try {
    await pushToArray("clients",client);
    console.log("Saved Client", client);
  } catch (err) {
    console.log('Problem saving the user', err);
  }
};
export const getClientsOffline = async ()=>{
  try {
    let clientsJson = AsyncStorage.getItem("clients")
    let clientsArray = JSON.parse(clientsJson)
    console.log("Clients Retrieved Successfully",clientsArray)
    return(clientsArray)
  } catch (error) {
    console.log("Error Getting All Clients" , error)
  }
}

// ------------------------------Deals Functions
export const saveDealOffline = async (deal)=>{
  try {
    await pushToArray("deals",deal);
    console.log("Saved Client", deal);
  } catch (err) {
    console.log('Problem saving the user', err);
  }
}