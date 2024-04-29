/**
 * Filename: SQLite.js
 * Created by: Willem Toews
 * Purpose: SQLite database for the flashcard app
 * Description: The database has two tables: decks and flashcards.
 *              *this database is going to be reworked in V3.0.0
 * TODO:
 *      
 *      
 */

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('flashcards922.db');

//initialize the database
export const initDatabase = ()  => {
  db.transaction((tx) => {
      tx.executeSql(
                'CREATE TABLE IF NOT EXISTS decks (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);',
          [],
          () => {
              tx.executeSql(
                'CREATE TABLE IF NOT EXISTS flashcards (id INTEGER PRIMARY KEY NOT NULL, deck_id INTEGER, question TEXT NOT NULL, answer TEXT NOT NULL, FOREIGN KEY(deck_id) REFERENCES decks(id));',
                  [],
                  null,
                  (_, err) => {
                      console.log(err);
                  }
              );
          },
          (_, err) => {
              console.log(err);
          }
      );
  });
};

//add a deck
export const addDeck = (name) => {
  db.transaction((tx) => {
    console.log(name);
      tx.executeSql(
          'INSERT INTO decks (name) VALUES (?);',
          [name],
          (_, result) => {
              console.log(result);
          },
          (_, err) => {
              console.log(err);
          }
      );
  });
};

//add a flashcard
export const addFlashcard = (deckId, question, answer) => {
  db.transaction((tx) => {
      tx.executeSql(
          'INSERT INTO flashcards (deck_id, question, answer) VALUES (?, ?, ?);',
          [deckId, question, answer],
          (_, result) => {
              console.log(result);
          },
          (_, err) => {
              console.log(err);
          }
      );
  });
};

//fetch all decks
export const fetchDecks = (callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM decks',
        [],
        (_, { rows }) => {
          const decks = [];
          for (let i = 0; i < rows.length; i++) {
            decks.push(rows.item(i));
          }
          callback(decks);
        },
        error => {
          console.log('Error fetching decks: ', error);
          callback([]); // Provide an empty array in case of an error
        }
      );
    });
  };

//currently not used since it doesn't callback  
//fetch all flashcards from deck_id
export const fetchFlashcards = (deckId, callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM flashcards WHERE deck_id = ?',
        [deckId],
        (_, { rows }) => {
          const flashcards = [];
          for (let i = 0; i < rows.length; i++) {
            flashcards.push(rows.item(i));
          }
          callback(flashcards);
        },
        error => {
          console.log('Error fetching flashcards: ', error);
          callback([]); // Provide an empty array in case of an error
        }
      );
    });
  };

  //fetch all flashcards
  export const fetchAllFlashcards = async (callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM flashcards',
        [],
        (_, { rows }) => {
          const flashcards = [];
          for (let i = 0; i < rows.length; i++) {
            flashcards.push(rows.item(i));
          }
          callback(flashcards);
        },
        error => {
          console.log('Error fetching flashcards: ', error);
          callback([]); // Provide an empty array in case of an error
        }
      );
    });
  };
  
//close the database
export const closeDatabase = () => {
  db._db.close();
};

//delete a deck
export const deleteDeck = (deckId) => {
  db.transaction((tx) => {
      tx.executeSql(
          'DELETE FROM decks WHERE id = ?;',
          [deckId],
          (_, result) => {
              console.log(result);//debug
          },
          (_, err) => {
              console.log(err);
          }
      );
  });
};