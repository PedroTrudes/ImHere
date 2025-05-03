import { Text, View } from "react-native";
import {styles} from './styles';

export default function Home(){
   return(
    <View style={styles.container}>
        <Text style={styles.containerTextTitle}>APP I AM HERE</Text>
        <Text style={styles.containerTextSpan}>Bem vindo ao Meu APP</Text>
    </View>
   )
}; 