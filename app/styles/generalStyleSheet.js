import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#191919',
    },
    headerText: {
        fontSize: 40,
        padding: 20,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff', 
        textShadowColor: '#FFC300',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20, 
    },
    backButton: {
        width: '40%',
        alignItems: 'center',
        padding: 16,
        borderRadius: 6, 
        elevation: 2,
        marginTop: 40,
        backgroundColor: '#C70039',
    },
    backButtonText: {
        fontSize: 20,
        color: 'white',
    },
    navButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    navButton: {
        width: '40%',
        height: '28%',
        alignItems: 'center',
        keepAspectRatio: 1,
        padding: 16,
        borderRadius: 6, 
        elevation: 2,
        backgroundColor: '#FFC300',
        padding: 15,
        margin: 20,
        marginTop: '20%',
        justifyContent: 'center',
    },
    navButtonText: {
        fontSize: 20,
        color: 'black',
    },
    infoButton: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        margin: 10,
        right: 0,
    },
    infoImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        margin: 10,
        right: 0,
        position: 'absolute',
    },
    infoText: {
        color: 'white',
        fontSize: 20,
        padding: 20,
    },
    image: {
        borderColor: 'white',
        borderWidth: 2,
        alignSelf: 'center',
        width: '95%',
        height: 800,
        resizeMode: 'contain',
        margin: 10,
    }
});

export default styles;