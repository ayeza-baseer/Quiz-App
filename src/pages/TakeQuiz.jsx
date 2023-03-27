import React, { useState } from "react";
import Question from "../components/Question";
import Result from "../components/Result";

function TakeQuiz({ questions }) {
  const [answerIndex, setAnswerIndex] = useState(null);
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  console.log(questions,"takeQuiz")

   console.log(questions[index],"takeQuizQuestion")
  const { question, answers, correctAnswerIndex } = questions[index];

  const handleCorrectAnswerChange = (indexAnswer) => {
    setAnswerIndex(indexAnswer);
    console.log(questions.length , index + 1)
   

    if (indexAnswer != correctAnswerIndex) {
        setAnswerIndex(null)
      }
    
    if (indexAnswer == correctAnswerIndex) {
      setCorrectAnswers(correctAnswers + 1);
      setAnswerIndex(null)
      console.log("correct");
    }
    if (questions.length != index + 1) 
    setIndex(index + 1);
else if (questions.length == index + 1) {
  setShowResult(true);
}
    
  };

  if (showResult) {
    return (
      <>
      <Result correctAnswers={correctAnswers} questionsLength={questions.length}/>
      </>
    );
  } else {
    return (
      <div className="center">
        <div className="centerQuiz">  
        <label className="question-label" htmlFor="question">Question:
      <input  className="input-text" type="text" id="question" name="question" value={question}  />
      </label>

        
         
          <br />
          {answers.map((answer, index) => (
            <div key={index}>
              <label className="input-with-radio" htmlFor={`answer${index}`}>
                Answer{index + 1}:
                <input
                  type="radio"
                  id={`correctAnswer${index}`}
                  name="correctAnswer"
                  value={index}
                  checked={answerIndex === index}
                  onChange={() => handleCorrectAnswerChange(index)}
                  required
                />
                <input
                  disabled={true}
                  className="input-text"
                  type="text"
                  id={`answer${index}`}
                  name="answer[]"
                  value={answer}
                />
                {/* {index >= 2 && <button type="button" onClick={() => removeAnswer(index)}>Remove Answer</button>} */}
              </label>

              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TakeQuiz;
