/**
 * NO LONGER USED
 * 
 */
import { Pressable, View, Text } from "react-native";
import Styles from "../styles/generalStyleSheet.js";
import { Link } from "expo-router";
import DeckViewerStyles from "../styles/deckViewerStyleSheet.js";

//todo change the style to its own file

export default DeckButton = ({ text, style, path, id }) => {
    return (
        <Link href={{
            pathname: path,
            params: id,
        }} asChild> 
            <Pressable
                style={style}
                onPress={() => { }}
                onLongPress={() => { }}//todo add a long press to edit the deck
            >
                <Text style={Styles.navButtonText}>{text}</Text>
            </Pressable>
        </Link>
    );
}