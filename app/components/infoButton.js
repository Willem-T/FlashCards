/**
 * Filename: infoButton.js
 * Created by: Willem Toews
 * Purpose: an info button component
 * Description: a info button that has an associated path and picture
 */
import { Pressable, ImageBackground } from "react-native";
import Styles from "../styles/generalStyleSheet.js";
import { Link } from "expo-router";

export default InfoButton = ({ text, path}) => {
    return (
        <ImageBackground source={require('../../assets/info.png')} style={Styles.infoImage}>
            <Link href={
                {
                    pathname: path,
                }} asChild> 
                <Pressable
                    style={Styles.infoButton}
                    onPress={() => { }}
                >
                </Pressable>
            </Link>
            </ImageBackground>
    );
}