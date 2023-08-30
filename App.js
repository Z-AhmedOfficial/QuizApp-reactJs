import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars'
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Jupiter'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['Wa', 'Ox', 'H2O', 'Hy'],
      correctAnswer: 'H2O'
    },
  
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // const currentQuestion = questions[currentQuestionIndex];

    if (!quizCompleted) { // Update the score only if the quiz is not completed
      if (option === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      setQuizCompleted(true); 
      alert("Quiz is completed")
    }
  };


  return (
    <div className="App">
      <div className="score-container">
        <p>Score: {score}</p>
      </div>
      <h1 className="text-center bg-black text-light p-3 rounded">QuizApp</h1>
      <h2 className="text-center p-5 m-3 bg-black text-warning">Question {currentQuestionIndex + 1}</h2>

      {currentQuestionIndex < questions.length ? (
        <div>
          <p className='bg-black text-warning m-3 p-4'>{currentQuestion.question}</p>
          <div className="options bg-warning">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score}</p>
        </div>
      )}
    </div>
  );
}

export default App;