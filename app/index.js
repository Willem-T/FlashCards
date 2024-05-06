/**
 * Filename: index.js
 * Created by: Willem Toews
 * Purpose: To be the main page of the app
 * Description: This is the main page of the app.
 *     
 */


// Components
import { StatusBar, View, Text } from 'react-native';
import NavButton from "./components/navButton.js";
import { useEffect } from 'react';
import InfoButton from "./components/infoButton.js";
import SettingsButton from "./components/settingsButton.js";

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
      
      {/* Settings Button */}
      <SettingsButton path={"/settings"} />

      {/* Info Button */}
      <InfoButton path={"/info"} />


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
