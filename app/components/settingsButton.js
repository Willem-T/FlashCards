/**
 * Filename: settingsButton.js
 * Created by: Willem Toews
 * Purpose: an settings button component
 * Description: a settings button that has an associated path and picture
 */
import { Pressable, ImageBackground } from "react-native";
import Styles from "../styles/generalStyleSheet.js";
import { Link } from "expo-router";

export default SettingsButton = ({ text, path}) => {
    return (
        <ImageBackground source={require('../../assets/settings.png')} style={Styles.settingsImage}>
            <Link href={
                {
                    pathname: path,
                }} asChild> 
                <Pressable
                    style={Styles.settingsButton}
                    onPress={() => { }}
                >
                </Pressable>
            </Link>
            </ImageBackground>
    );
}