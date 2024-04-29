/**
 * Filename: backButton.js
 * Created by: Willem Toews
 * Purpose: A back button component
 * Description: A generic back button component that can be used in any screen.
 * TODO:
 *      
 */
import { Pressable, View, Text } from "react-native";
import Styles from "../styles/generalStyleSheet.js";
import { useNavigation } from "expo-router";

export default BackButton = ({text}) => {
    const navigate = useNavigation();
    return (
        <Pressable
            style={Styles.backButton}
            onPress={() => navigate.goBack()}
        >
            <Text style={Styles.backButtonText}>{text}</Text>
        </Pressable>
    );
}