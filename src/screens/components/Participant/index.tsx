import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';

export function Participant() {
    return(
        <View style={styles.container}>
            <Text style={styles.nameEvent}>Componente Participante</Text>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
        </View>
    )
};