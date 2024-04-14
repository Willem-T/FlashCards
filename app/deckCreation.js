/**
 * Filename: deckCreation.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: To create a new flashcard deck
 * TODO:
 *      fix the database issues
 *      add flashcards to the database
 *      
 */

import { View, Text, TextInput, Pressable, Modal } from "react-native";
import { useState, useEffect } from "react";
import { addDeck, addFlashcard, initDatabase, fetchDecks, } from "./SQLite";
import BackButton from './components/backButton.js';


// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckCreationStyles from "./styles/deckCreationStyleSheet.js";

export default function App() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [flashcards, setFlashcards] = useState([]);


  useEffect(() => {
    initDatabase();
  }, []);

    useEffect(() => {
      fetchDecks((decks) => {
        console.log(decks);
      });
    }, []);
    
  async function createDeck() {
    await addDeck(name);
    // let result = await fetchDecks();
    // console.log(result);

  }



  return (
    <View style={Styles.container}>
      <BackButton text={"Back"} />

      {/* Main Content */}
      <Text style={DeckCreationStyles.title}>Create a new deck</Text>

      <TextInput
        style={DeckCreationStyles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
        keyboardType="default"
      />

      <View style={DeckCreationStyles.buttonContainer}>
        <Pressable
          style={DeckCreationStyles.modelButton}
          onPress={() => setModalVisible(true)}
        >
          <Text>Add flashcards</Text>
        </Pressable>

        <Pressable
          style={DeckCreationStyles.modelButton}
          onPress={() => createDeck()}
        ><Text>Create Deck</Text>
        </Pressable>
      </View>

      {/* FlashCards Model */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <TextInput
              style={DeckCreationStyles.input}
              onChangeText={setQuestion}
              value={question}
              placeholder="Question"
              keyboardType="default"
            />

            <TextInput
              style={DeckCreationStyles.input}
              onChangeText={setAnswer}
              value={answer}
              placeholder="Answer"
              keyboardType="default"
            />

            <Pressable
              style={Styles.backButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Hide Modal</Text>
            </Pressable>
            <Pressable
              style={[Styles.backButton, { backgroundColor: '#FFC300' }]}
              onPress={() => {

                flashcards.push({ question: question, answer: answer });
                console.log(flashcards);
                setQuestion('');
                setAnswer('');
              }}
            >
              <Text>Add Flashcard</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}