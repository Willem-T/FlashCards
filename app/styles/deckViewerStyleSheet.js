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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        width: '90%',
        height: '10%',
        alignItems: 'center',
        padding: 16,
        borderRadius: 6, 
        elevation: 2,
        backgroundColor: '#FFC300',
        padding: 15,
        margin: 20,
        marginTop: '10%',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollView: {
        width: '100%',
        height: '70%',
        marginBottom: 90,
        top: 20,
    },
});

export default styles;