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
import { fetchFlashcards, fetchAllFlashcards } from "./SQLite";
import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";


export default function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [filteredFlashcards, setFilteredFlashcards] = useState([]);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const params = useLocalSearchParams();

  //debug
  useEffect(() => {
    console.log(params.deckId);
  }, []);
  //debug
  useEffect(() => {
    console.log(filteredFlashcards);//debug
  }, [filteredFlashcards]);

  //fetch all the flashcards at the start
  useEffect(() => {
    getFlashcards();
  }, []);

  //fetch all the flashcards in an async way
  async function getFlashcards() {
    await fetchAllFlashcards((flashcards) => {
      //console.log(flashcards);//debug
      setFlashcards(flashcards);
    });
  }

  // filter the flashcards based on the deck id
  // ensure to only filter after the flashcards have been updated
  useEffect(() => {
    console.log(flashcards);//debug
    //filter the flashcards
    let filteredFlashcards = flashcards.filter(flashcard => flashcard.id == params.deckId);
    setFilteredFlashcards(filteredFlashcards);
  }, [flashcards]);


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