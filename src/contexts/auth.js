import React, {useEffect, createContext, useState} from "react";
import firebase from "../services/firebaseConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({})

function AuthProvider( { children } ){
    const [user, setUser] = useState(null)  
    const [loading, setLoading] = useState(true)
    const [loadAuth, setLoadAuth] = useState(false)

    useEffect(() =>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
                setLoading(false)
        }
        loadStorage();
    }, [])
    
    //cadastrar user
    async function signUp(email, password, nome){
        setLoadAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo: 0,
                nome: nome
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email
                };
                setUser(data)
                storageUse(data);
                setLoadAuth(false);
            })
        })
        .catch((error)=>{
            alert("Erro ao criar conta")
            setLoadAuth(false)
        })
    }

    async function storageUse(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    // logar usuario
    async function signIn(email, password){
        setLoadAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data ={
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email
                };
                
                setUser(data)
                storageUse(data);
                setLoadAuth(false);
            })
        })
        .catch((error)=>{
            alert("E-mail ou senha incorreto")
            setLoadAuth(false);
        })
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null);
        })
    }
    
    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadAuth, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;