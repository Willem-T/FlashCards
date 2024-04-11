/*
Created by:   Willem Toews
Purpose:      CIT-2269 Final Project
Desciption:   

TODO:       
  //a button to create a new flashcard deck
  //a input field to name the deck
  //a input field to add the question
  //a input field to add the answer
  //a button to add the flashcard
  //a button to submit the deck

  //a button to view all decks
  //a button to view a specific deck
  //long hold to bring mode to edit deck
*/ 

// Components
import { StatusBar, View, Text} from 'react-native';
import NavButton from "./components/navButton.js";
import { useEffect } from 'react';

// Styles
import Styles from "./styles/generalStyleSheet.js";

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#191919');
  }, []); 


  return (
    <View style={Styles.container}>

      {/* Title */}
      <Text style={[Styles.headerText]}>FlashCards</Text>


      {/* Buttons */}
      <View style={Styles.navButtonContainer}>
        <NavButton
          text={"Create Deck"}
          path={"/createDeck"}
          style={Styles.navButton}
        />

        <NavButton
          text={"View Decks"}
          path={"/deckList"}
          style={Styles.navButton}
        />
      </View>
    </View>
  );
};
