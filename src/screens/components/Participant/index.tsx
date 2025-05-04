import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';

type Props = {
    user: string;
    onRemove: () => void;
}

export function Participant({user, onRemove}: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.nameEvent}>{user}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
        </View>
    )
};