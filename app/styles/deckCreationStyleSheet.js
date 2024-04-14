import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        padding: 20,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff', 
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        backgroundColor: 'white',
    },
    modelButton: {
        width: '40%',
        height: '28%',
        alignItems: 'center',
        //padding: 16,
        borderRadius: 6, 
        elevation: 2,
        backgroundColor: '#FFC300',
        padding: 15,
        margin: 20,
        // marginTop: '30%',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default styles;