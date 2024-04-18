/**
 * Filename: flashcardViewer.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: To View and memorize flashcards
 * TODO:
 *      Add the ability to view a flash cards
 *      fix the filtering becuase of async issues
 */

import { View, Text, Pressable } from "react-native";
import BackButton from './components/backButton.js';
import { fetchFlashcards, fetchAllFlashcards} from "./SQLite";
import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";


export default function App() {
  const [flashcard, setFlashcard] = useState([]);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const { deckId, flashcards} = useLocalSearchParams();

  useEffect(() => {
  console.log(deckId);//debug
  console.log(flashcards);//debug

  setFlashcard(flashcards);
  }, []);
  //moving this to the other page since im fecthing all the flashcards anyway
  // async function getFlashcards() {
  //   await fetchAllFlashcards((flashcards) => {
  //     console.log(flashcards);//debug
  //     //setFlashcards(flashcards);

  //     // filter the flashcards
  //     for (let i = 0; i < flashcards.length; i++) {
  //       if (flashcards[i].id == params.deckId) {
  //         console.log(flashcards[i]);//debug
  //         setFlashcards(flashcards[i]);
  //       }
  //     }
  //   });
  // }

  // useEffect(() => {
  //   getFlashcards();
  // }, []);

  return (
    <View style={Styles.container}>
      <BackButton text={"Back"} />

        {/* Main Content */}

        {/* {flashcards.map((flashcard) => {
          return (
            <Text style={DeckViewerStyles.title}>{flashcard.question}</Text>
          )
        })} */}
    </View>
  )
}