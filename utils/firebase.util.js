import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import {auth ,app , db} from "../firebase.config"
import { collection, doc, getDoc, setDoc } from "firebase/firestore"

export const saveUserOnline = async(uid ,formData)=>{
    try {
        let user = {
            id: uid,
            username:formData.username,
            phone:formData.phone,
            brand: formData.brand,
        }
        const userRef = doc(db, "users", uid)
        await setDoc(userRef , user)
        console.log("User saved to FireStore Successfully" , user)
        return(user)
    } catch (error) {
        console.log("Error on SaveUserOnline" , error)
    }
}

export const userRegisterOnline = async (userBodyData)=>{
    try{
        let userCredential = await createUserWithEmailAndPassword(auth ,`${userBodyData.brand}@gmail.com`, userBodyData.password )
        let user = userCredential.user;
        console.log( "User Registered succesfully")
        if(user){
            let savedUser = await saveUserOnline(user.uid ,userBodyData)
            return(savedUser);
        }
    }catch(err){
        console.log('Problem in firebase register' ,err)
    }
}

export const userLoginOnline = async (brand , password)=>{
    try{
        let userCredential = await signInWithEmailAndPassword(auth ,`${brand}@gmail.com`, password )
        let user = userCredential.user;
        console.log( "Logged in succesfully",user)
        return(user?user:null);

    }catch(err){
        console.log('Problem in firebase login' ,err)
    }
}

// using Subcollections in Firebase
// adding client
export const addClientOnline = async (userId, clientData) => {
    try {
      const userRef = db.collection('users').doc(userId);
      const clientRef = await userRef.collection('clients').add(clientData);
      console.log('Client added with ID:', clientRef.id);
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };
// add deals for client
export const addDealOnline = async (userId, clientId, dealData) => {
    try {
      const clientRef = db.collection('users').doc(userId).collection('clients').doc(clientId);
      const dealRef = await clientRef.collection('deals').add(dealData);
      console.log('Deal added with ID:', dealRef.id);
    } catch (error) {
      console.error('Error adding deal:', error);
    }
  };
export const getClientsOline = async (userId) => {
    try {
      const clientsSnapshot = await db.collection('users').doc(userId).collection('clients').get();
      const clients = clientsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Clients:', clients);
      return clients;
    } catch (error) {
      console.error('Error getting clients:', error);
    }
  };
  
export const getClientDealsOnline = async (userId, clientId) => {
    try {
      const dealsSnapshot = await db.collection('users').doc(userId).collection('clients').doc(clientId).collection('deals').get();
      const deals = dealsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Deals:', deals);
      return deals;
    } catch (error) {
      console.error('Error getting deals:', error);
    }
  };
