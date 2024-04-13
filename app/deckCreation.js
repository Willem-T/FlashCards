/**
 * Filename: deckCreation.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: To create a new flashcard deck
 * TODO:
 *      create file
 */

import { View } from "react-native";
import { addDeck, initDatabase } from "./SQLite";
import BackButton from './components/backButton.js';

// Styles
import Styles from "./styles/generalStyleSheet.js";

  export default function App(){
      //a input field to name the deck
      

      //a input field to add the question

      //a input field to add the answer

      //a button to add the flashcard

      //a button to submit the deck

      return (
        <View style={Styles.container}>
            <BackButton text={"Back"} />

        </View>
      )
  }