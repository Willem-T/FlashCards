/**
 * Filename: flashcardViewer.js
 * Created by: Willem Toews
 * Purpose: To view a deck of flashcards
 * Description: this allows the user to view a deck of flashcards. 
 *              The user can swipe left or right to go to the next flashcard.
 * TODO:
 */

import { View, Text, Animated, Pressable, ImageBackground, Modal } from "react-native";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import BackButton from './components/backButton.js';
import { fetchAllFlashcards } from "./SQLite";
import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";


export default function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [filteredFlashcards, setFilteredFlashcards] = useState([]);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [currentFlashcardSide, setCurrentFlashcardSide] = useState("Question");//might want to change this to an var later
  const [modalVisible, setModalVisible] = useState(false);
  const params = useLocalSearchParams();
  const [queue, setQueue] = useState([{ "answer": "Loading...", "deck_id": "Loading", "id": params.deckId, "question": "Loading..." }]);// needs to be a defualt length of 1 to not show the restart modal
  const translateX = new Animated.Value(0);
  const [counter, setCounter] = useState({ "right": 0, "wrong": 0});

  //debug
  useEffect(() => {
    console.log(params.deckId);
  }, []);



  /******************************
   * Flashcard Fetch
   ******************************/
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



  /******************************
   * Filtering
   ******************************/
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



  /******************************
  * queue logic
  ******************************/
  //set the current flashcard
  useEffect(() => {
    randomFlashcard();
  }, [queue]);
  //remove the flashcard from the queue
  function removeFlashcard(index) {
    let newQueue = queue.filter((flashcard, index) => index != currentFlashcard);
    setQueue(newQueue);
  }

  function randomFlashcard() {
    //randomize the queue number based on the length of the queue
    let random = Math.floor(Math.random() * queue.length);
    setCurrentFlashcard(random);
    console.log("//////////////////////////");//debug
    console.log(queue);//debug
    //console.log(queue[random]);//debug
  }



  /******************************
  * Swipe logic
  ******************************/
  //swipe right
  //know the answer remove the flashcard
  function onSwipeRight() {
    Animated.timing(translateX, {
      toValue: 500,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCounter({ "right": counter.right + 1, "wrong": counter.wrong})
      removeFlashcard(currentFlashcard);
      translateX.setValue(0);
    });
  }

  //swipe right
  //dont know the answer keep the flashcard
  function onSwipeLeft() {
    Animated.timing(translateX, {
      toValue: -500,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCounter({ "wrong": counter.wrong + 1, "right": counter.right})
      randomFlashcard();
      translateX.setValue(0);
    });
  }

  // Gesture handling
  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  // Handle the state change of the gesture
  const handleStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (event.nativeEvent.translationX > 115) {
        onSwipeRight();
        setCurrentFlashcardSide("Question");
      } else if (event.nativeEvent.translationX < -115) {
        onSwipeLeft();
        setCurrentFlashcardSide("Question");
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };



  /******************************
  * fliping the flashcard
  ******************************/
  //flip the flashcard
  function flashcardSide() {
    if (currentFlashcardSide == "Question") {
      setCurrentFlashcardSide("Answer");
    } else {
      setCurrentFlashcardSide("Question");
    }
  }

  /******************************
  * End of deck logic
  ******************************/
  //check if the deck is done
  const isEndOfDeck = () => {
    if (queue.length === 0) {
      return (
        console.log(counter) // Debugging purposes
        ,
        <Modal
          animationType="slide"
          transparent={true}
          visible={true} // Set modalVisible to true when the deck is done
          onRequestClose={() => {
            setModalVisible(false); 
          }}
        >
          <View style={DeckViewerStyles.modelContainer}>
            <View style={DeckViewerStyles.modal}>
              <Text style={DeckViewerStyles.modalTitle}>Deck Completed</Text>
              <Text style={DeckViewerStyles.modalText}>You Knew {counter.right > 0 ? ((filteredFlashcards.length / (counter.right + counter.wrong)) * 100) : ""}% Of The Questions</Text>
              <Text style={DeckViewerStyles.modalText}>Knew: {counter.right}</Text>
              <Text style={DeckViewerStyles.modalText}>Didn't Know: {counter.wrong}</Text>
              <Pressable
                style={[Styles.backButton, { backgroundColor: '#FFC300', alignSelf: 'center', }]}
                onPress={() => {
                  setQueue(filteredFlashcards);
                  setModalVisible(false);
                  resetCounter();
                }}
              >
                <Text>Restart Deck</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      );
    } else {
      return (<></>); // Return null if the deck is not done
    }
  }

  //reset the counter
  function resetCounter() {
    setCounter({ "right": 0, "wrong": 0});
  }
  
  return (
    <View style={Styles.container}>
      <BackButton text={"Back"} />

      {/* Flashcard */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler
          onGestureEvent={handleGestureEvent}
          onHandlerStateChange={handleStateChange}
        >
          <Animated.View style={[DeckViewerStyles.flashcard, { transform: [{ translateX }] }]}>
            <Pressable
              onPress={() => flashcardSide()}
              style={{ flex: 1, justifyContent: 'center' }}
            >

              <View style={DeckViewerStyles.imageContainer}>
                <ImageBackground source={require('../assets/redArrow.png')} style={[DeckViewerStyles.flashcardImage, DeckViewerStyles.redArrow]} />
                <ImageBackground source={require('../assets/greenArrow.png')} style={[DeckViewerStyles.flashcardImage, DeckViewerStyles.greenArrow]} />
              </View>
              <Text style={DeckViewerStyles.flashcardTitle}> {currentFlashcardSide} </Text>
              <Text style={DeckViewerStyles.flashcardText}>{queue.length > 0 ? (
                currentFlashcardSide == "Question" ? queue[currentFlashcard]?.question : queue[currentFlashcard]?.answer
              ) : (
                "No questions available"
              )}</Text>
            </Pressable>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>

      {/* Modal */}
      {isEndOfDeck()}
    </View>
  )
}