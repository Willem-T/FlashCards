/**
 * Filename: deckCreation.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: To create a new flashcard deck
 * TODO:
 *      fix the database issues
 *      set limits on the input fields for the flashcards
 *      clear the flashcards after the deck is created
 *      fix the deck_id on the flashcard insert to match the id of the deck
 *      check if the deck exists before creating it
 *      check if any fields are empty before creating the deck
 *      
 */

import { View, Text, TextInput, Pressable, Modal, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { addDeck, addFlashcard, initDatabase } from "./SQLite";
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

  async function createDeck() {
    await addDeck(name);
    // let result = await fetchDecks();
    // console.log(result);
    for(let i = 0; i < flashcards.length; i++) {
      await addFlashcard(name, flashcards[i].question, flashcards[i].answer);
    }
    return clearInputs();//hopefully this doesnt break anything
  }

  // Clear inputs after deck is created
  function clearInputs() {
    setName('');
    setFlashcards([]);
  }

  // Clear flashcard inputs
  function clearFlashInputs() {
    setQuestion('');
    setAnswer('');
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
        <View style={DeckCreationStyles.modelContainer}>
          <View style={Styles.modalView}>

            {/* Hide */}
            <Pressable
              style={DeckCreationStyles.modalBackButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={DeckCreationStyles.buttonText}>Hide</Text>
            </Pressable>

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

            {/* Add Flashcard */}
            <Pressable
              style={[Styles.backButton, { backgroundColor: '#FFC300', alignSelf: 'center', }]}
              onPress={() => {
                flashcards.push({ question: question, answer: answer });
                console.log(flashcards);
                clearFlashInputs();
              }}
            >
              <Text>Add Flashcard</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ScrollView
              style={DeckCreationStyles.scrollView}
              contentContainerStyle={{
                paddingBottom: 20,
              }}
            >
              {flashcards.map((flashcard, index) => {
                return (
                  <View key={index} style={DeckCreationStyles.flashcard}>
                    <Text style={DeckCreationStyles.flashcardText}>{"Question: " + flashcard.question}</Text>
                    <Text style={DeckCreationStyles.flashcardText}>{"Answer: " + flashcard.answer + "\n"}</Text>
                  </View>
                );
              })}
            </ScrollView>
    </View>
  )
}