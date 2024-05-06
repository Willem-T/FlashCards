import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        padding: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20, // Added marginBottom
    },
    button: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 6,
        elevation: 2,
        backgroundColor: '#FFC300',
        margin: 20,
        justifyContent: 'center',
        minWidth: 200, // Set a minimum width for the button
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollView: {
        flex: 1, // Make ScrollView flex to take entire available space
        marginBottom: 20, // Added marginBottom
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
        height: "90%",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'center',
    },
    flashcardText: {
        fontSize: 40,
        textAlign: 'center',
        alignSelf: 'center',
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
    flashcardTitle: {
        fontSize: 50,
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0, 
        right: 0, 
    },
    modelContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        backgroundColor: '#191919',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        color: '#fff',
        fontSize: 40,
        textAlign: 'center',
        padding: 5,
    },
    modalTitle: {
        fontSize: 50,
        padding: 15,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff', 
        textShadowColor: '#FFC300',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20, 
    },
    flashcardSide: {
        backgroundColor: "#FFC300",
        minWidth: "80%",
        height: "90%",
        justifyContent: 'center',
    },
});

export default styles;