import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F1',
        width: '100%',
        padding: 15,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    nameEvent: {
        color: '#000',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'red',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText : {
        fontWeight: 'bold',
        color: '#FFF'
    }
})