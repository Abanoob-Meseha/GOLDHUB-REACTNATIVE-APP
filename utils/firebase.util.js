import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import {auth ,app , db} from "../firebase.config"

const userRegisterOnline = async (userBodyData)=>{
    try{
        let userCredential = await createUserWithEmailAndPassword(auth ,`${userBodyData.brand}@gmail.com`, userBodyData.password )
        let user = userCredential.user;
        console.log( "User Created succesfully",user)
        return(user? user:null); 
    }catch(err){
        console.log('Problem in firebase register' ,err)
    }
   
}
const userLoginOnline = async (brand , password)=>{
    try{
        let userCredential = await signInWithEmailAndPassword(auth ,`${brand}@gmail.com`, password )
        let user = userCredential.user;
        console.log( "Loged in succesfully",user)
    }catch(err){
        console.log('Problem in firebase login' ,err)
    }
}
module.exports = {userRegisterOnline , userLoginOnline}