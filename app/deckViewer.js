/**
 * Filename: deckViewer.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: To View a deck of flashcards
 * TODO:
 *      Add the ability to view a deck
 * 
 * Caution: decks id is the name of the deck
 */

import { View, ScrollView, Text, Pressable } from "react-native";
import BackButton from './components/backButton.js';
import { initDatabase, fetchDecks, fetchAllFlashcards} from "./SQLite";
import { useState, useEffect } from "react";
import { useNavigation } from "expo-router";
import NavButton from "./components/navButton.js";
import {Link} from "expo-router";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";


export default function App() {
  const [decks, setDecks] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    initDatabase();
  }, []);

  useEffect(() => {
    fetchDecks((decks) => {
      console.log(decks);//debug
      setDecks(decks);
    });
  }, []);

  //fetch all the flashcards in an async way
  async function getFlashcards() {
    await fetchAllFlashcards((flashcards) => {
      //console.log(flashcards);//debug
      //setFlashcards(flashcards);

      // filter the flashcards
      // for (let i = 0; i < flashcards.length; i++) {
      //   if (flashcards[i].id == params.deckId) {
      //     console.log(flashcards[i]);//debug
      //     setFlashcards(flashcards[i]);
      //   }
      // }
      setFlashcards(flashcards);
    });
  }

  useEffect(() => {
    getFlashcards();
  }, []);

  return (
    <View style={Styles.container}>
      <BackButton text={"Back"} />

      {/* Main Content */}
      <Text style={DeckViewerStyles.title}>View a deck</Text>

      <ScrollView
        style={DeckViewerStyles.scrollView}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {decks.map((deck) => {
          console.log(deck.id);//debug
          return (
            <NavButton 
            text={deck.name} 
            params={{
              deckId: deck.id,
              flashcards: flashcards,
            }}
            path={"flashcardViewer"} 
            style={DeckViewerStyles.button}/>
          );
        })}
      </ScrollView>
    </View>
  )
}