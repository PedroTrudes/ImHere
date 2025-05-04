import { Text, TextInput, View, TouchableOpacity } from "react-native";
import {styles} from './styles';
import { Participant } from '../components/Participant';

export function Home(){

    function handleParticipantAdd(){
        window.alert('chamando funcao')
        console.log("chamando funcao")
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
            <Participant />
            <Participant />
            <Participant />
        </View>
   )
}; 