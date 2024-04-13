/**
 * Filename: SQLite.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: SQLite database for flashcard app
 * TODO:
 *      create addDeck function
 */

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('flashcards.db');

//initialize the database
export const initDatabase = ()  => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS decks (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);',
                [],
                () => {
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS flashcards (id INTEGER PRIMARY KEY NOT NULL, deck_id INTEGER, question TEXT NOT NULL, answer TEXT NOT NULL, FOREIGN KEY(deck_id) REFERENCES decks(id));',
                        [],
                        () => {
                            resolve();
                        },
                        (_, err) => {
                            reject(err);
                        }
                    );
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

//add a deck
export const addDeck = (name) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO decks (name) VALUES (?);',
                [name],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

//add a flashcard
export const addFlashcard = (deckId, question, answer) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO flashcards (deck_id, question, answer) VALUES (?, ?, ?);',
                [deckId, question, answer],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
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
          console.log('Error fetching sounds: ', error);
          callback([]); // Provide an empty array in case of an error
        }
      );
    });
  };

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
          console.log('Error fetching sounds: ', error);
          callback([]); // Provide an empty array in case of an error
        }
      );
    });
  };