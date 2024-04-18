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
  const [queue, setQueue] = useState([]);
  const params = useLocalSearchParams();

  //debug
  useEffect(() => {
    console.log(params.deckId);
  }, []);

  /** 
   * Fetching
   */
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

  /**
   * Filtering
   */
  // filter the flashcards based on the deck id
  // ensure to only filter after the flashcards have been updated
  useEffect(() => {
    //console.log(flashcards);//debug
    //filter the flashcards
    let filteredFlashcards = flashcards.filter(flashcard => flashcard.deck_id == params.deckId);
    setFilteredFlashcards(filteredFlashcards);
  }, [flashcards]);

  //add the filtered flashcards to the queue
  useEffect(() => {
    //console.log(filteredFlashcards);//debug
    setQueue(filteredFlashcards);
  }, [filteredFlashcards]);

  /**
   * Queue logic
   */
  //set the current flashcard
  useEffect(() => {
    //randomize the queue number based on the length of the queue
    let random = Math.floor(Math.random() * queue.length);
    setCurrentFlashcard(random);
    console.log("//////////////////////////");//debug
    console.log(queue);//debug
    //console.log(queue[random]);//debug
  }, [queue]);
  //remove the flashcard from the queue
  function removeFlashcard(index) {
    let newQueue = queue.filter((flashcard, index) => index != currentFlashcard);
    setQueue(newQueue);
  }

  return (
    <View style={Styles.container}>
      <BackButton text={"Back"} />

      {/* Main Content */}

      <Text style={DeckViewerStyles.title}>
        {queue.length > 0 ? (
          queue[currentFlashcard]?.question || "No questions available"
        ) : (
          "No questions available"
        )}

      </Text>
      <Text style={DeckViewerStyles.title}>
        {queue.length > 0 ? (
          queue[currentFlashcard]?.question || "No questions available"
        ) : (
          "No questions available"
        )}

      </Text>

      {/* button to remove flashcard */}
      <Pressable
        style={DeckViewerStyles.button}
        onPress={() => removeFlashcard(currentFlashcard)}
      >
        <Text>Remove</Text>
      </Pressable>

    </View>
  )
}