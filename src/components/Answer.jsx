// import React,{useState} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// function Answer({answer,correctAnswerIndex,index,questions,setQuestions,indexQuestion}) {
//   const [answerEdit,setAnswerEdit]=useState(answer)
 
//   const handleAnswerChange = (indexAnswer, value) => {
//     console.log(answerEdit,"answerEdit")
//     console.log(value,"targetValue")
//     console.log(indexAnswer,"index")

//     const newAnswers = [...answer];
//     console.log(newAnswers,"newAnswer")
   
//     newAnswers[indexAnswer] = value;
//     console.log(newAnswers,"after change")
//     // console.log(newAnswers,"handleAnswerChangeEdit");
//     setAnswerEdit(newAnswers);
//   };

 

// const removeAnswer = (indexAnswer) => {
//   const newQuestions = [...questions];
//   newQuestions[indexQuestion].answers.splice(indexAnswer, 1);
//   console.log(newQuestions,);
//   if (indexAnswer === questions[indexQuestion].correctAnswerIndex) {
//     questions[indexQuestion].correctAnswerIndex=null
//   } else if (index < questions[indexQuestion].correctAnswerIndex) {
//     questions[indexQuestion].correctAnswerIndex=  questions[indexQuestion].correctAnswerIndex -1
//    }
//    setQuestions(newQuestions);
// };

//     return (
//         <label
//         className="input-with-radio"
//         htmlFor={`answer${index}`}
//       >
//         Answer {index + 1}:
//         <input
//           type="radio"
//           disabled={true}
//           id={`correctAnswer${index}`}
//           name="correctAnswer"
//           checked={correctAnswerIndex === index}
//         />
//         <input
//           className="input-text"
//           type="text"
//           id={`answer${index}`}
//           name="answer[]"
//           value={answerEdit}
      
//           required
         
//           onChange={(e) => handleAnswerChange(index, e.target.value)}
//         />
//          <FontAwesomeIcon
//                     icon={faTimes}
//                     style={{ color: "red" }}
//                      onClick={() => removeAnswer(index)}
//                   />
//         {/* {index >= 2 && <button type="button" onClick={() => removeAnswer(index)}>Remove Answer</button>} */}
//       </label>
//     );
// }

// export default Answer;