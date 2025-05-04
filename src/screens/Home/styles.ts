import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        padding: 45,
    },
    containerText:{
        marginTop: 35,
    },
    containerTextTitle: {
        marginTop: 24,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f1f1f1'
    },
    containerTextSpan: {
        fontSize: 18,
        color: '#f1f1f1'
    },
    containerCard: {
        marginBottom: 35,
        marginTop: 25,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#F1F1F1'
    },
    containerList : {
        marginBottom: 22
    },
    input: {
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',  
        padding: 15,
        fontSize: 18
    },
    button: {
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 5,
        backgroundColor: '#89e051'
    },
    buttonText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#FFF'
    },
    textEmpty: {
      color: '#FFF',
      fontSize: 22,
      textAlign: 'center'
    }
});