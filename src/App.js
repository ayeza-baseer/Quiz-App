import React,{useState,useEffect} from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./App.css";
import Quiz from "./pages/Quiz";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditQuiz from "./pages/EditQuiz";
import TakeQuiz from "./pages/TakeQuiz";

const firebaseConfig = {
  apiKey: "AIzaSyAYd9HjHEMl0xAUBb9M4SJNyFyHv_Iyr2w",
  authDomain: "quiz-76fec.firebaseapp.com",
  projectId: "quiz-76fec",
  storageBucket: "quiz-76fec.appspot.com",
  messagingSenderId: "700476941331",
  appId: "1:700476941331:web:f28c42703f89aa2916cbe6",
  measurementId: "G-8GYVR30JQD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const addData = () => {
    console.log("hi")
    firebase.firestore().collection("myCollection")
      .add({
        // Add data here
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com",
      })
      .then((docRef) => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  const [questions,setQuestions]=useState([])
  console.log(questions)
  const handleData = (data) => {
    setQuestions([...questions, data]);
  };

  return (
    <div className="App">
       {/* <button onClick={addData}>Add Data</button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz/>} />
          <Route path="/edit-quiz" element={<EditQuiz questions={questions} handleData={handleData} setQuestions={setQuestions} /> } />
          <Route path="/take-quiz" element={<TakeQuiz questions={questions}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
