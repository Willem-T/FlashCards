/**
 * Filename: deckViewer.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: To View a deck of flashcards
 * TODO:
 *      create file
 */

import { View } from "react-native";
import { fetchDecks } from "./SQLite";
import BackButton from './components/backButton.js';

// Styles
import Styles from "./styles/generalStyleSheet.js";


  export default function App(){
      //a button to view a specific deck

      //long hold to bring mode to edit deck

      return (
        <View style={Styles.container}>
            <BackButton text={"Back"} />
        </View>
      )
  }