import React from 'react';

function Result({correctAnswers,questionsLength}) {
    return (
        <div className="center">
        <div className="centerQuiz">
        <h3>Result</h3>
        <p>Percentage Scored: {(correctAnswers/questionsLength)*100}%</p>
        </div>
       </div>
    );
}

export default Result;