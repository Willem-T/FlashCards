/**
 * Filename: info.js
 * Created by: Willem Toews
 * Purpose: To be the information page
 * Description: This is the information page of the app.
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
        <Text style={Styles.infoText}>
          This app was created by Willem Toews for the CIT-2269 final project.
          {"\n\n"}
          The purpose of this app is to help users memorize questions using flashcards.
          {"\n\n"}
          The user can create decks of flashcards and view them.
          {"\n\n"}
          The user can also view and memorize the questions.
          {"\n\n"}
          The app is built using React Native and SQLite.
        </Text>

        <Image style={Styles.image} source={require('../assets/infoImage1.png')} />
        <Image style={Styles.image} source={require('../assets/infoImage2.png')} />
      </ScrollView>
    </View>
  )
}