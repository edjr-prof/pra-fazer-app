import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth, db } from '../scripts/firebase-config';

export default function CreateUser() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [erro, setErro] = useState("")
    const router = useRouter();

    function userCreate(){
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // Cria registro no usuário no banco
                set(ref(db, 'usuarios/' + user.uid), {
                    nome: nome,
                    email: email
                });
                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErro(errorMessage);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Criar Usuário</Text>
            
            <Text>{erro}</Text>
            
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder='Nome'
            />

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='E-mail'
            />

            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder='Senha'
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={userCreate}
            >
                <Text style={styles.textButton}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        color: "#fff",
        fontSize: 32,
        marginBottom: 50
    },
    container: {
        backgroundColor: "#F60",
        padding: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alert: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 20,
    },
    input: {
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 20,
        width: '100%'
    },
    button: {
        backgroundColor: '#070A52',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%'
    },
    textButton: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    }
});