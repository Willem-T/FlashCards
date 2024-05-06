/**
 * Filename: settings.js
 * Created by: Willem Toews
 * Purpose: To be the settings page of the app
 * Description: Settings that effect the way flashcards function
 */

import { View, ScrollView, Text, Pressable} from "react-native";
import BackButton from './components/backButton.js';
import { useState, useEffect } from "react";

// Styles
import Styles from "./styles/generalStyleSheet.js";
import DeckViewerStyles from "./styles/deckViewerStyleSheet.js";

export default function App() {
  const [settings, setSettings] = useState({});




  return (
    <View style={Styles.container}>
      <BackButton 
      text={"Back"} 
      />

      <Pressable
        style={Styles.saveButton}
        onPress={() => {
          //do a confirmation message
        }}
        >
          <Text style={Styles.saveButtonText}>Save Settings</Text>
        </Pressable>

        {/* Main content */}

        <Pressable
        style={Styles.saveButton}
        onPress={() => {
          //do a confirmation message
        }}
        >
          <Text style={Styles.saveButtonText}>Reset to Defaults</Text>
        </Pressable>

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