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
        maxWidth: "80%",
        height: "90%",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'center',
        flex: 1,
    },
    flashcardText: {
        fontSize: 40,
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
    flashcardTitle: {
        fontSize: 50,
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0, 
        right: 0, 
    },
});

export default styles;