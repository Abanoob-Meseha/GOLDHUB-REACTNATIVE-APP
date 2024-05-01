// import { userSchema } from "../models/userModel";
// import { RealmProvider, useQuery, Realm,useRealm } from '@realm/react';

// const realm = useRealm()
// const saveUser = (userInfo)=>{
//     Realm.open({ schema: [userSchema] })
//       .then(() => {
//         // Add a new User
//         realm.write(() => {
//           realm.create('User', {
//             firebaseId : userInfo.id,
//             token : userInfo.token,
//             brand: userInfo.brand, 
//             username: userInfo.username,
//             phoneNumber: userInfo.phone,
//             fingerprint : userInfo.fingerprint,
//             password: userInfo.password ,
//             clients: [],
//             deals: []
//           })
//         });
//         console.log("User Saved To localDB Successfully")
//     }).catch((err)=>{
//         console.error( "problem saving user to localDB",err)
//     })
// };

// module.exports = {saveUser}