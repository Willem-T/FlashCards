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
    backButton: {
        width: '30%',
        alignItems: 'center',
        padding: 16,
        borderRadius: 6,
        elevation: 2,
        marginTop: 40,
        backgroundColor: '#C70039',
    },
    flashcard: {
        backgroundColor: "#FFC300",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginTop: 20,
        marginBottom: 20,
        minWidth: "80%",
        maxWidth: "80%",
        height: "90%",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'center',
        flex: 1,
    },
    flashcardText: {
        fontSize: 50,
        textAlign: 'center',
    },
    flashcardImage: {
        width: 50,
        height: 50,
        position: 'absolute',
    },
    redArrow: {
        position: 'absolute',
        left: -25, 
    },
    greenArrow: {
        transform: [{ rotate: '180deg' }],
        position: 'absolute', 
        right: -25, 
    },
    imageContainer: {
        position: 'absolute',
        width: '100%',
    },
});

export default styles;