/**
 * Filename: SQLite.js
 * Created by: Willem Toews
 * Purpose: CIT-2269 Final Project
 * Description: SQLite database for flashcard app
 * TODO:
 * 
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
                    resolve();
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