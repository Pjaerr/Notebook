import React from 'react';

import styles from './App.scss';

import Notes from './Notes';

//import firebase from "firebase";
//import "firebase/firestore";

class App extends React.Component 
{
  constructor(props)
  {
    super(props);



    // firebase.initializeApp({
    //   apiKey: "API-KEY",
    //   authDomain: "AUTHDOMAIN",
    //   projectId: "PROJECTID"
    // });

    // // Initialize Cloud Firestore through Firebase
    // var db = firebase.firestore();


    // db.collection("users").add({
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    // })
    //   .then(function (docRef)
    //   {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error)
    //   {
    //     console.error("Error adding document: ", error);
    //   });

    // db.collection("users").add({
    //   first: "Alan",
    //   middle: "Mathison",
    //   last: "Turing",
    //   born: 1912
    // })
    //   .then(function (docRef)
    //   {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error)
    //   {
    //     console.error("Error adding document: ", error);
    //   });


    this.notes = [];

    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++)
    {
      if (keys[i].substr(0, 4) === "note")
      {
        this.notes.push(JSON.parse(localStorage.getItem(keys[i])));
      }
    }
  }


  pushNotes = (notes) =>
  {
    this.notes = notes;

    //Push data externally here.

    localStorage.clear();

    for (let i = 0; i < this.notes.length; i++)
    {
      localStorage.setItem(`note ${i}`, JSON.stringify(this.notes[i]));
    }
  }

  render()
  {
    return (
      <div className={styles.app}>
        <Notes pushNotes={this.pushNotes} externallyLoadedNotes={this.notes} />
      </div>
    );
  }
}

export default App;
