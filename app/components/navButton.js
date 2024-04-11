import { Pressable, View, Text } from "react-native";
import Styles from "../styles/generalStyleSheet.js";
import { Link } from "expo-router";

export default NavButton = ({ text, style, path }) => {
    return (
            <Link href={path} asChild> 
                <Pressable
                    style={style}
                    onPress={() => { }}
                >
                    <Text style={Styles.navButtonText}>{text}</Text>
                </Pressable>
            </Link>
    );
}