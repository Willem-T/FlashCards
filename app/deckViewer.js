/**
 * Filename: deckViewer.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: To View a deck of flashcards
 * TODO:
 *      fix the wierd styling issue when theres only a few decks
 * 
 * Caution: decks id is the name of the deck
 */

import { View, ScrollView, Text, Pressable } from "react-native";
import BackButton from './components/backButton.js';
import { initDatabase, fetchDecks, fetchFlashcards} from "./SQLite";
import { useState, useEffect } from "react";
import { useNavigation } from "expo-router";
import NavButton from "./components/navButton.js";
import {Link} from "expo-router";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";


export default function App() {
  const [decks, setDecks] = useState([]);

  //initialize the database
  useEffect(() => {
    initDatabase();
  }, []);

  //fetch all the decks
  useEffect(() => {
    fetchDecks((decks) => {
      console.log(decks);//debug
      setDecks(decks);
    });
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
          console.log(deck.id + " " + deck.name);//debug
          return (
            <NavButton text={deck.name} params={deck.name} path={"flashcardViewer"} style={DeckViewerStyles.button}/>
          );
        })}
      </ScrollView>
    </View>
  )
}