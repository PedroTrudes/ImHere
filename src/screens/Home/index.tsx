import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import {styles} from './styles';
import { Participant } from '../components/Participant';
import { useState } from "react";

export function Home(){
    const listParticipants = ['Pedro Trudes', 'Sara Silva', 'Bruna Prado', 'Lucas Prado', 'Ricardo Silk', 'Paulo Fonseca', 'Edy Braga', 'Wilton Silva'];
    
    function handleParticipantAdd(){
        if(listParticipants.includes("Pedro ")){
            return Alert.alert('Participante já existe')
        }else{
            return Alert.alert('Participante cadastrado com sucesso')
        }
    }

    function heandleParticipantRemove(user: string, age: number){
        Alert.alert('Remover', `Remover o participante ${user}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.containerTextTitle}>Nome do Evento</Text>
                <Text style={styles.containerTextSpan}>Sabado, 3 de maio ded 2025</Text>
            </View>
            <View style={styles.containerCard}>
                <TextInput 
                style={styles.input} 
                placeholder="Ex: WebSummit"
                placeholderTextColor={'#6b6b6b'}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerList}>
                <Text style={styles.containerTextTitle}>Eventos</Text>
            </View>
 
            <FlatList 
            data={listParticipants} 
            keyExtractor={item => item} 
            renderItem={({ item }) => (
                <Participant 
                key={item}
                user={item}
                onRemove={() => heandleParticipantRemove(item, 24)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.textEmpty} >Ninguém chegou no evento ainda</Text>
            )}
            />

        </View>
   )
}; 

/* 

<ScrollView showsVerticalScrollIndicator={false}>
{listParticipants.map(participant => (
<Participant key={participant} 
user={participant} 
onRemove={() => heandleParticipantRemove(participant, 24)} />
))}
</ScrollView>
*/ 