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
import { initDatabase, fetchDecks, } from "./SQLite";
import { useState, useEffect } from "react";
import { useNavigation } from "expo-router";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";


export default function App() {
  const [decks, setDecks] = useState([]);
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
          return (
            
            <Pressable
              style={DeckViewerStyles.button}
              id={deck.id.toString()}
              key={deck.name}
              onPress={() => { 
                navigation.navigate("flashcardViewer", { deckName: deck.name});
              }}
              onLongPress={() => { }} //todo add a long press to edit the deck
            >
              <Text style={DeckViewerStyles.buttonText}>{deck.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  )
}