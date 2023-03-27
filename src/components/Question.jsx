import React,{useState} from 'react';

function Question({question,questions,index,setQuestions}) {
   const [question1,setQuestion]=useState(question)

//    const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

const handleInputBlur = () => {
      console.log(question1,index)
      let copyArray=[...questions]
      copyArray[index].question=question1
      console.log(copyArray)
      setQuestions(copyArray)
  };

    return (
        <div className='parent-question'>
            <label className="question-label" htmlFor="question">Question:
      <input  className="input-text" type="text" id="question" name="question" value={question1} onChange={(e) => setQuestion(e.target.value)} onBlur={handleInputBlur} />
      </label>
        </div>
    );
}

export default Question;