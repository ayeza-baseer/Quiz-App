import React from 'react';
import './Quiz.css'

import { useNavigate } from 'react-router-dom';
function Quiz() {
  const navigate = useNavigate();
    return (
      <div >
       
        <div className='center' >
        <div>
        <button onClick={() => navigate('/edit-quiz')}>Edit Quiz</button>
        </div>
        <div>
        <button onClick={() => navigate('/take-quiz')}>Take Quiz</button>
        </div>
        </div>
       </div>
       
    );
}

export default Quiz;