/*
Created by:   Willem Toews
Purpose:      CIT-2269 Final Project
Desciption:   

TODO:       
  //a button to create a new flashcard deck

  //a button to view all decks
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
          path={"/deckCreation"}
          style={Styles.navButton}
        />

        <NavButton
          text={"View Decks"}
          path={"/deckViewer"}
          style={Styles.navButton}
        />
      </View>
    </View>
  );
};
