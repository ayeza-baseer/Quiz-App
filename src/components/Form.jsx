import React,{useState} from "react";

function Form({setShowForm,handleData,handleEdit}) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const newQuestion = { question, answers, correctAnswerIndex };
    handleData(newQuestion);
    handleEdit(newQuestion)
    setQuestion("");
    setAnswers(["", ""]);
    setShowForm(false);
    setCorrectAnswerIndex(null);
  };

  const handleAnswerChange = (index, value) => {
    console.log(index, value);
    const newAnswers = [...answers];

    console.log(newAnswers,"valuetobeadded")
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleCorrectAnswerChange = (index) => {
    setCorrectAnswerIndex(index);
  };

  const addAnswer = () => {
    setAnswers([...answers, ""]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="input-with-radio" htmlFor="question">
        Question:
        <input
          className="input-text"
          type="text"
          id="question"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
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
              checked={correctAnswerIndex === index}
              onChange={() => handleCorrectAnswerChange(index)}
              required
            />
            <input
              className="input-text"
              type="text"
              id={`answer${index}`}
              name="answer[]"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              required
            />
            {/* {index >= 2 && <button type="button" onClick={() => removeAnswer(index)}>Remove Answer</button>} */}
          </label>

          <br />
        </div>
      ))}
      <div className="center-button">
        {answers.length < 4 && (
          <button type="button" onClick={addAnswer}>
            Add Answer
          </button>
        )}

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
