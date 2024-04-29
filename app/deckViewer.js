/**
 * Filename: deckViewer.js
 * Created by: Willem Toews
 * Purpose: To view a deck of flashcards
 * Description: The user can view a list of all the decks, and select a deck to view.
 *              The user can also delete a deck by longpressing a deck.
 * TODO:
 * 
 * Caution: decks id is the name of the deck
 */

import { View, ScrollView, Text, Modal, Pressable } from "react-native";
import BackButton from './components/backButton.js';
import { initDatabase, fetchDecks, deleteDeck} from "./SQLite";
import { useState, useEffect } from "react";
import { useNavigation } from "expo-router";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";
import DeckCreationStyles from "./styles/deckCreationStyleSheet.js";

export default function App() {
  const [decks, setDecks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDeckParams, setSelectedDeckParams] = useState({"deck_id": undefined, "deck_name": undefined});//todo change this to a string
  let navigate = useNavigation().navigate;

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
  }, [selectedDeckParams.deck_id]);//really bad work around to refresh the decks

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
            // <NavButton 
            // text={deck.name} 
            // params={deck.name} 
            // path={"flashcardViewer"} 
            // style={DeckViewerStyles.button}
            // key={deck.id}
            // onLongPress={() => {setModalVisible(true)}}
            // onPress={() => {console.log(deck.name)}}
            // />
            <Pressable
              style={DeckViewerStyles.button}
              key={deck.id}
              onPress={() => {
                navigate("flashcardViewer", {deckId: deck.id, deckName: deck.name});
              }}
              onLongPress={() => {
                setSelectedDeckParams({"deck_id": deck.id, "deck_name": deck.name});
                setModalVisible(true)
              }}
            ><Text>{deck.name}</Text></Pressable>
          );
        })}
      </ScrollView>

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible} 
          onRequestClose={() => {
            setModalVisible(false); 
          }}
        >
          <View style={DeckViewerStyles.modelContainer}>
            <View style={DeckViewerStyles.modal}>
            {/* Hide */}
            <Pressable
              style={DeckCreationStyles.modalBackButton}
              onPress={() => {
                setSelectedDeckParams({"deck_id": undefined, "deck_name": undefined});//reset after the modal is closed
                setModalVisible(!modalVisible)}}>
              <Text style={DeckCreationStyles.buttonText}>Hide</Text>
            </Pressable>
              <Text style={DeckViewerStyles.modalText}>Are you sure you want to delete deck {selectedDeckParams.deck_name}</Text>
              <Pressable
                style={[Styles.backButton, { backgroundColor: '#FFC300', alignSelf: 'center', }]}
                onPress={() => {
                  deleteDeck(selectedDeckParams.deck_id);
                  setSelectedDeckParams({"deck_id": undefined, "deck_name": undefined});//reset after the modal is closed
                  setModalVisible(false);
                }}
              >
                <Text>Delete</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
  )
}