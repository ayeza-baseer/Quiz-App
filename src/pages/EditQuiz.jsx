import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Question from "../components/Question";
import Answer from "../components/Answer";
import Button from "../components/Button";
import Form from "../components/Form";

function EditQuiz({ questions, handleData, setQuestions }) {
  const [questionsEdit, setQuestionsEdit] = useState(questions);
  console.log(questionsEdit, "questionsEdit");
  const [answerEdit, setAnswerEdit] = useState();

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (indexQuestion) => {
    if (questionsEdit[indexQuestion].answers.length < 2) {
      return alert("Please add more answers");
    } else {
      console.log(questionsEdit, "submit");
      setQuestions(questionsEdit);
      alert("successfully edited");
    }
  };
  const toggleForm = () => {
    setShowForm(true);
  };

  const handleEdit = (data) => {
    setQuestionsEdit([...questionsEdit, data]);
  };
  const handleAnswerChange = (indexQuestion, indexAnswer, value) => {
    let copyArray = [...questionsEdit];
    let question = copyArray.find((question, index) => index == indexQuestion);

    question.answers[indexAnswer] = value;

    setQuestionsEdit(copyArray);
  };

  const removeAnswer = (indexAnswer, indexQuestion) => {
    const newQuestionsStringify = JSON.stringify(questions);
    const newQuestions = JSON.parse(newQuestionsStringify);
    console.log(newQuestions, "parse");
    newQuestions[indexQuestion].answers.splice(indexAnswer, 1);
    console.log(newQuestions);
    if (indexAnswer === questions[indexQuestion].correctAnswerIndex) {
      newQuestions[indexQuestion].correctAnswerIndex = null;
    } else if (indexAnswer < questions[indexQuestion].correctAnswerIndex) {
      newQuestions[indexQuestion].correctAnswerIndex =
        newQuestions[indexQuestion].correctAnswerIndex - 1;
    }
    console.log(questions, "questions");
    setQuestionsEdit(newQuestions);
  };

  const handleCorrectAnswerChange = (index, indexQuestion) => {
    let copyArray = [...questionsEdit];
    let question = copyArray.find((question, index) => index == indexQuestion);
    question.correctAnswerIndex = index;
    setQuestionsEdit(copyArray);
  };

  const removeQuestion = (index) => {
    const newQuestion = [...questions];
    newQuestion.splice(index, 1);
    setQuestions(newQuestion);
  };

  const addAnswer = (indexQuestion) => {
    console.log(indexQuestion, "addAnswer");
    const newAnswers = [...questions];
    let question = newAnswers[indexQuestion];
    console.log(question, "addAnswer");
    let answer = question.answers;
    console.log(answer, "addAnswer");
    answer.push("");
    setQuestionsEdit(newAnswers);
    setQuestions(newAnswers);
  };

  return (
    <div className="center-edit">
      <div className="centerQuiz">
        <h2>Edit Quiz</h2>
        {questionsEdit &&
          questionsEdit.map(
            ({ question, answers, correctAnswerIndex }, indexQuestion) => (
              <>
                <div className="separator" key={indexQuestion}>
                  <div className="input-with-radio">
                    <Question
                      question={question}
                      questions={questions}
                      index={indexQuestion}
                      setQuestions={setQuestions}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{ color: "red" }}
                      onClick={() => removeQuestion(indexQuestion)}
                    />
                  </div>

                  <br />
                  {answers.map((answer, index) => (
                    <div key={index}>
                      <label
                        className="input-with-radio"
                        htmlFor={`answer${index}`}
                      >
                        Answer {index + 1}:
                        <input
                          type="radio"
                          id={`correctAnswer${index}`}
                          name="correctAnswer"
                        
                          onChange={() =>
                            handleCorrectAnswerChange(index, indexQuestion)
                          }
                        />
                        <input
                          className="input-text"
                          type="text"
                          id={`answer${index}`}
                          name="answer[]"
                          value={questionsEdit[indexQuestion].answers[index]}
                          required
                          onChange={(e) =>
                            handleAnswerChange(
                              indexQuestion,
                              index,
                              e.target.value
                            )
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          style={{ color: "red" }}
                          onClick={() => removeAnswer(index, indexQuestion)}
                        />
                        {/* {index >= 2 && <button type="button" onClick={() => removeAnswer(index)}>Remove Answer</button>} */}
                      </label>

                      <br />
                    </div>
                  ))}
                  <p>
                    Correct Answer Index is{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {questionsEdit[indexQuestion].correctAnswerIndex}
                    </span>
                  </p>
                  <div className="center-button-edit">
                    {answers.length < 4 && (
                      <button
                        type="button"
                        onClick={() => addAnswer(indexQuestion)}
                      >
                        Add Answer
                      </button>
                    )}

                    <button
                      type="submit"
                      onClick={() => handleSubmit(indexQuestion)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )
          )}
        {questionsEdit.length > 0 && !showForm && (
          <>
            <Button handleClick={toggleForm} text="Add new Question" />
          </>
        )}
        <br />
        {(questions.length == 0 || showForm) && (
          <>
            <Form
              setShowForm={setShowForm}
              handleData={handleData}
              handleEdit={handleEdit}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default EditQuiz;
