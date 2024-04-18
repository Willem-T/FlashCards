import { Pressable, View, Text } from "react-native";
import Styles from "../styles/generalStyleSheet.js";
import { Link } from "expo-router";

export default NavButton = ({ text, style, path, params }) => {
    return (
            <Link href={
                {
                    pathname: path,
                    params: params
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