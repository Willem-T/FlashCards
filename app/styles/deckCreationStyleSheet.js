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
        margin: 15,
        marginTop: 70,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        backgroundColor: 'white',
        alignSelf: 'center',
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
    modalBackButton: {
        width: '30%',
        alignSelf: 'center',
        padding: 16,
        borderRadius: 6, 
        elevation: 2,
        marginTop: 40,
        backgroundColor: '#C70039',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    modelContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        //justifyContent: 'center',
        //alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    scrollView: {
        width: '100%',
        height: '70%',
        marginBottom: 90,
        backgroundColor: '#FFC300',
        borderRadius: 6,
        elevation: 2,

    },
    flashcardText: {
        fontSize: 20,
        color: 'black',
    },
    flashcard: {
        //for later use
    },
});

export default styles;