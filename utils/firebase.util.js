import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth ,app , db} from "../firebase.config"

const userRegister = async (brand , password)=>{
    try{
        let userCredential = await createUserWithEmailAndPassword(auth ,brand, password )
        let user = userCredential.user;
        console.log( "User Created succesfully",user)
    }catch(err){
        console.log('Problem in firebase register' ,err)
    }
   
}
module.exports = {userRegister}