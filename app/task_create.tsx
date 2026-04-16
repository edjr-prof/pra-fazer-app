import { useRouter } from 'expo-router';
import { push, ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth, db } from '../scripts/firebase-config';

export default function CreateTask() {
    const [date, setDate] = useState("")
    const [task, setTask] = useState("")
    const [erro, setErro] = useState("")
    const router = useRouter();

    function taskCreate(){
        //Obtem a refência do nó tasks do usuário que está logado
        const taskAuth = ref(db, 'tasks/' + auth.currentUser?.uid);
        //Define um ID para a tarefa
        const newTask = push(taskAuth);
        // Cria a tarefa na base de dados
        set(newTask, {
            date: date,
            task: task
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Criar Tarefa</Text>
            
            <Text>{erro}</Text>
            
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholder='Data'
            />

            <TextInput
                style={styles.input}
                value={task}
                onChangeText={setTask}
                placeholder='Tarefa'
            />

            <TouchableOpacity
                style={styles.button}
                onPress={taskCreate}
            >
                <Text style={styles.textButton}>Salvar</Text>
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