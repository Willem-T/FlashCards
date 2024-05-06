/**
 * Filename: settings.js
 * Created by: Willem Toews
 * Purpose: To be the settings page of the app
 * Description: Settings that effect the way flashcards function
 */

import { View, ScrollView, Text, Image } from "react-native";
import BackButton from './components/backButton.js';

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";


export default function App() {

  return (
    <View style={Styles.container}>
      <BackButton text={"Back"} />

      <ScrollView
        style={DeckViewerStyles.scrollView}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >

      </ScrollView>
    </View>
  )
}