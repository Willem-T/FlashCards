/**
 * Filename: navButton.js
 * Created by: Willem Toews
 * Purpose: A navigation button component
 * Description: A generic navigation button component that can be used in any screen.
 */
import { Pressable,Text } from "react-native";
import Styles from "../styles/generalStyleSheet.js";
import { Link } from "expo-router";

export default NavButton = ({ text, style, path, params,}) => {
    return (
            <Link href={
                {
                    pathname: path,
                    params: {deckId: params}
                }} asChild> 
                <Pressable
                    style={style}
                    onPress={() => { }}
                >
                    <Text style={Styles.navButtonText}>{text}</Text>
                </Pressable>
            </Link>
    );
}