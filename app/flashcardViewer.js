/**
 * Filename: flashcardViewer.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: To View and memorize flashcards
 * TODO:
 *      Add the ability to view a flash cards
 */

import { View, Text, Pressable } from "react-native";
import BackButton from './components/backButton.js';
import { fetchFlashcards} from "./SQLite";
import { useState, useEffect } from "react";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";


export default function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetchFlashcards((flashcards) => {
      console.log(flashcards);//debug
      setFlashcards(flashcards);
    });
  }, []);

  return (
    <View style={Styles.container}>
      <BackButton text={"Back"} />

        {/* Main Content */}
    </View>
  )
}